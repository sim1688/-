const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { URL } = require("url");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 5173);
const API_HOST = "api.oceanengine.com";
const AUTH_HOST = "ad.oceanengine.com";

function loadEnv() {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

function json(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(data, null, 2));
}

function html(res, statusCode, content) {
  res.writeHead(statusCode, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(content);
}

function readConfig() {
  return {
    appId: process.env.OCEANENGINE_APP_ID || "1814394273423499",
    advertiserId: process.env.OCEANENGINE_ADVERTISER_ID || "1825202551573923",
    organizationId: process.env.OCEANENGINE_ORGANIZATION_ID || "1855464436371721",
    sourceProjectId: process.env.OCEANENGINE_SOURCE_PROJECT_ID || "7495640232558264331",
    hasSecret: Boolean(process.env.OCEANENGINE_SECRET),
    hasAccessToken: Boolean(process.env.OCEANENGINE_ACCESS_TOKEN),
    hasRefreshToken: Boolean(process.env.OCEANENGINE_REFRESH_TOKEN),
  };
}

function oceanGet(apiPath, query, accessToken) {
  return new Promise((resolve, reject) => {
    const search = new URLSearchParams();
    Object.keys(query).forEach((key) => {
      if (query[key] !== undefined && query[key] !== null) {
        search.set(key, String(query[key]));
      }
    });

    const request = https.request({
      hostname: API_HOST,
      path: `${apiPath}?${search.toString()}`,
      method: "GET",
      headers: {
        "Access-Token": accessToken,
        "User-Agent": "oceanengine-batch-creator/0.1",
      },
    }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ statusCode: response.statusCode, body: parsed });
        } catch (error) {
          reject(new Error(`巨量接口返回非 JSON：${body.slice(0, 200)}`));
        }
      });
    });

    request.on("error", reject);
    request.end();
  });
}

function isAccessTokenExpired(body) {
  if (!body) return false;
  const message = String(body.message || body.error_message || "");
  return body.code === 40102 || (message.includes("access_token") && message.includes("过期"));
}

async function refreshOAuthToken() {
  const config = readConfig();
  if (!process.env.OCEANENGINE_SECRET || !process.env.OCEANENGINE_REFRESH_TOKEN) {
    throw new Error("access_token已过期，且缺少 OCEANENGINE_SECRET 或 OCEANENGINE_REFRESH_TOKEN，无法自动刷新。请重新授权。");
  }

  const result = await oceanPost(AUTH_HOST, "/open_api/oauth2/refresh_token/", {
    app_id: config.appId,
    secret: process.env.OCEANENGINE_SECRET,
    refresh_token: process.env.OCEANENGINE_REFRESH_TOKEN,
  });

  if (!result.body || result.body.code !== 0) {
    const message = result.body && result.body.message ? result.body.message : "refresh_token刷新失败";
    throw new Error(`access_token已过期，自动刷新失败：${message}。请重新授权。`);
  }

  saveTokenPayload(result.body);
  return process.env.OCEANENGINE_ACCESS_TOKEN;
}

async function oceanGetWithAuth(apiPath, query) {
  const result = await oceanGet(apiPath, query, process.env.OCEANENGINE_ACCESS_TOKEN);
  if (!isAccessTokenExpired(result.body)) return result;

  const accessToken = await refreshOAuthToken();
  return oceanGet(apiPath, query, accessToken);
}

async function fetchEbpAdvertisers(enterpriseOrganizationId) {
  const all = [];
  let page = 1;
  let totalPage = 1;

  do {
    const result = await oceanGetWithAuth("/open_api/2/ebp/advertiser/list/", {
      enterprise_organization_id: enterpriseOrganizationId,
      account_source: "AD",
      page,
      page_size: 100,
    });

    if (!result.body || result.body.code !== 0) {
      return {
        ok: false,
        message: result.body && result.body.message ? result.body.message : "Failed to fetch EBP advertisers",
        body: result.body,
        list: all,
      };
    }

    const data = result.body.data || {};
    const list = data.account_list || data.list || [];
    list.forEach((item) => all.push(item));
    totalPage = data.page_info && data.page_info.total_page ? Number(data.page_info.total_page) : page;
    page += 1;
  } while (page <= totalPage);

  return { ok: true, list: all };
}

function normalizeMiniGame(item, productType) {
  const instanceId = item.instance_id || item.micro_app_instance_id || item.app_id || item.asset_id || item.id;
  const name = item.name || item.micro_program_name || item.app_name || item.game_name || item.title || "--";
  const iconUrl = item.icon_url ||
    item.logo ||
    item.image_url ||
    item.avatar ||
    (item.icon && (item.icon.url || item.icon.image_url || item.icon.tos_url)) ||
    "";
  return {
    product_type: productType,
    instance_id: instanceId == null ? "" : String(instanceId),
    name,
    user_name: item.user_name || item.appid || item.app_id || item.micro_program_id || "",
    icon_url: iconUrl,
    audit_status: item.audit_status || item.status || item.auditStatus || "",
    authorization_status: item.authorization_status || item.auth_status || item.authorizationStatus || "",
    raw: item,
  };
}

function extractListAndPageInfo(data) {
  const source = data || {};
  const candidates = [
    source.list,
    source.items,
    source.records,
    source.game_list,
    source.wechat_game_list,
    source.micro_game_list,
    source.micro_app_list,
    source.applets,
    source.apps,
  ];
  const list = candidates.find((item) => Array.isArray(item)) || [];
  const pageInfo = source.page_info || source.pageInfo || {};
  return {
    list,
    total: Number(pageInfo.total_number || pageInfo.total_count || source.total_number || source.total || list.length || 0),
    totalPage: Number(pageInfo.total_page || source.total_page || 1),
  };
}

function normalizeAwemeListData(data) {
  const source = data || {};
  const candidates = [
    source.list,
    source.aweme_list,
    source.ies_account_list,
    source.accounts,
    source.items,
  ];
  const list = candidates.find((item) => Array.isArray(item)) || [];
  const pageInfo = source.page_info || source.pageInfo || {};
  return {
    list,
    pageInfo: {
      page: Number(pageInfo.page || source.page || 1),
      page_size: Number(pageInfo.page_size || source.page_size || list.length || 0),
      total_number: Number(pageInfo.total_number || pageInfo.total_count || source.total_number || source.total || list.length || 0),
      total_page: Number(pageInfo.total_page || source.total_page || 1),
    },
  };
}

function fallbackAwemeAccount() {
  try {
    const sourcePromotion = readJsonFile("data/source-promotions.json").data.list[0];
    const awemeId = sourcePromotion.native_setting && sourcePromotion.native_setting.aweme_id;
    if (!awemeId) return null;
    return {
      aweme_id: String(awemeId),
      aweme_name: "样例广告抖音号",
      status: "SOURCE_SAMPLE",
      source: "source-promotions",
    };
  } catch (error) {
    return null;
  }
}

function normalizeLandingPage(item) {
  const siteId = item.site_id || item.siteId || item.id || item.asset_id || item.external_url_id || item.instance_id;
  const rawUrl = item.external_url || item.site_url || item.url || item.preview_url || item.previewUrl || "";
  const url = rawUrl || (siteId ? `https://www.chengzijianzhan.com/tetris/page/${siteId}/` : "");
  return {
    id: String(siteId || url || ""),
    name: item.name || item.site_name || item.title || item.asset_name || `落地页-${siteId || ""}`,
    url,
    status: item.status || item.site_status || item.audit_status || item.delivery_status || "",
    raw: item,
  };
}

function collectRawValues(source, keyMatcher, values = []) {
  if (source == null) return values;
  if (Array.isArray(source)) {
    source.forEach((item) => collectRawValues(item, keyMatcher, values));
    return values;
  }
  if (typeof source !== "object") return values;
  Object.entries(source).forEach(([key, value]) => {
    if (keyMatcher(key)) values.push(value);
    if (value && typeof value === "object") collectRawValues(value, keyMatcher, values);
  });
  return values;
}

function flattenValues(values) {
  const output = [];
  values.forEach((value) => {
    if (value == null) return;
    if (Array.isArray(value)) {
      output.push(...flattenValues(value));
    } else if (typeof value === "object") {
      output.push(...flattenValues(Object.values(value)));
    } else {
      output.push(String(value));
    }
  });
  return output;
}

function rawValueMatches(source, keyMatcher, expected) {
  if (!expected) return true;
  const normalized = String(expected).trim();
  if (!normalized) return true;
  const values = flattenValues(collectRawValues(source, keyMatcher));
  if (!values.length) return false;
  return values.some((value) => value === normalized || value.includes(normalized));
}

function parseLandingTime(value) {
  if (value == null || value === "") return null;
  if (typeof value === "number") {
    const ms = value > 100000000000 ? value : value * 1000;
    const date = new Date(ms);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  const text = String(value).trim();
  if (/^\d+$/.test(text)) return parseLandingTime(Number(text));
  const date = new Date(text.replace(/\//g, "-"));
  return Number.isNaN(date.getTime()) ? null : date;
}

function landingMatchesCurrentTime(raw, now) {
  if (raw && raw.source === "promotion") {
    return promotionAllowsCurrentTime(raw.promotion || raw, now);
  }
  const statusValues = flattenValues(collectRawValues(raw, (key) => /status|state|enable|deliver/i.test(key))).map((item) => item.toUpperCase());
  const blockedStatus = statusValues.some((value) => /DELETE|DELETED|DISABLE|DISABLED|OFFLINE|REJECT|INVALID|EXPIRE|EXPIRED/.test(value));
  if (blockedStatus) return false;

  const startValues = collectRawValues(raw, (key) => /start.*time|begin.*time|effective.*start|valid.*start|start_date/i.test(key));
  const endValues = collectRawValues(raw, (key) => /end.*time|expire.*time|effective.*end|valid.*end|end_date/i.test(key));
  const startDates = flattenValues(startValues).map(parseLandingTime).filter(Boolean);
  const endDates = flattenValues(endValues).map(parseLandingTime).filter(Boolean);
  if (startDates.length && startDates.some((date) => date > now)) return false;
  if (endDates.length && endDates.every((date) => date < now)) return false;
  return true;
}

function filterLandingPages(list, filters) {
  const now = parseLandingTime(filters.currentTime) || new Date();
  return list.filter((item) => {
    const raw = item.raw || {};
    if (!landingMatchesCurrentTime(raw, now)) return false;
    if (!rawValueMatches(raw, (key) => /external.*action|external_actions|optimi[sz]e.*goal|convert|conversion/i.test(key), filters.externalAction)) {
      return false;
    }
    if (!rawValueMatches(raw, (key) => /micro.*app.*instance|micro.*app|mini.*game|game.*asset|instance_id|asset_id|app_id/i.test(key), filters.microAppInstanceId)) {
      return false;
    }
    return true;
  });
}

function extractLandingPageId(url) {
  const match = String(url || "").match(/\/page\/([^/?#]+)/i);
  return match ? match[1] : "";
}

function promotionAllowsCurrentTime(promotion, now) {
  const schedule = String((promotion && promotion.schedule_time) || "");
  if (schedule.length < 336) return true;
  const date = now || new Date();
  const jsDay = date.getDay();
  const mondayFirstDay = jsDay === 0 ? 6 : jsDay - 1;
  const slot = date.getHours() * 2 + (date.getMinutes() >= 30 ? 1 : 0);
  return schedule[mondayFirstDay * 48 + slot] === "1";
}

function normalizeLandingFromPromotion(url, promotion, project, index) {
  const id = extractLandingPageId(url) || String(url);
  return {
    id,
    name: `${promotion.promotion_name || "单元落地页"}-${index + 1}`,
    url,
    status: promotion.status || promotion.opt_status || "",
    raw: {
      source: "promotion",
      promotion,
      project,
      external_action: project && project.optimize_goal && project.optimize_goal.external_action,
      micro_app_instance_id: project && project.micro_app_instance_id,
      schedule_time: promotion.schedule_time || (project && project.schedule_time),
    },
  };
}

async function fetchProjectsByIds(advertiserId, projectIds) {
  const ids = Array.from(new Set((projectIds || []).map((item) => String(item || "")).filter(Boolean)));
  if (!ids.length) return new Map();
  const result = await oceanGetWithAuth("/open_api/v3.0/project/list/", {
    advertiser_id: advertiserId,
    filtering: JSON.stringify({ project_ids: ids }),
    page: 1,
    page_size: Math.min(100, ids.length),
  });
  const map = new Map();
  if (result.body && result.body.code === 0) {
    const list = result.body.data && Array.isArray(result.body.data.list) ? result.body.data.list : [];
    list.forEach((item) => map.set(String(item.project_id), item));
  }
  return map;
}

async function fetchLandingPagesFromPromotions(advertiserId, page, pageSize) {
  const safePageSize = Math.min(20, positiveInt(pageSize, 20, 1, 20));
  const result = await oceanGetWithAuth("/open_api/v3.0/promotion/list/", {
    advertiser_id: advertiserId,
    page,
    page_size: safePageSize,
  });
  if (!result.body || result.body.code !== 0) {
    return {
      ok: false,
      apiPath: "/open_api/v3.0/promotion/list/",
      list: [],
      pageInfo: { page, page_size: safePageSize, total_number: 0, total_page: 1 },
      errors: [{
        api: "/open_api/v3.0/promotion/list/",
        code: result.body && result.body.code,
        message: result.body && result.body.message,
        help_message: result.body && result.body.help_message,
      }],
    };
  }
  const promotions = result.body.data && Array.isArray(result.body.data.list) ? result.body.data.list : [];
  const projectMap = await fetchProjectsByIds(advertiserId, promotions.map((item) => item.project_id));
  const seen = new Set();
  const list = [];
  const addPromotionLandings = (promotion, project) => {
    const urls = promotion.promotion_materials && Array.isArray(promotion.promotion_materials.external_url_material_list)
      ? promotion.promotion_materials.external_url_material_list
      : [];
    urls.forEach((landingUrl, index) => {
      const key = String(landingUrl);
      if (!key || seen.has(key)) return;
      seen.add(key);
      list.push(normalizeLandingFromPromotion(landingUrl, promotion, project, index));
    });
  };

  try {
    const sourcePromotion = readJsonFile("data/source-promotions.json").data.list[0];
    const sourceProject = readJsonFile("data/source-project.json").data.list[0];
    if (String(sourcePromotion.advertiser_id || advertiserId) === String(advertiserId)) {
      addPromotionLandings(sourcePromotion, sourceProject);
    }
  } catch (error) {
    // Source files are optional for landing-page discovery.
  }

  promotions.forEach((promotion) => {
    const project = projectMap.get(String(promotion.project_id)) || {};
    addPromotionLandings(promotion, project);
  });
  const pageInfo = result.body.data && result.body.data.page_info ? result.body.data.page_info : {};
  return {
    ok: true,
    apiPath: "/open_api/v3.0/promotion/list/",
    list,
    pageInfo: {
      page: Number(pageInfo.page || page),
      page_size: Number(pageInfo.page_size || safePageSize),
      total_number: list.length,
      total_page: Number(pageInfo.total_page || 1),
    },
  };
}

async function fetchLandingPages(advertiserId, page, pageSize, filters = {}) {
  const externalAction = filters.externalAction || "AD_CONVERT_TYPE_GAME_ADDICTION";
  const microAppInstanceId = filters.microAppInstanceId && /^\d+$/.test(String(filters.microAppInstanceId))
    ? Number(filters.microAppInstanceId)
    : null;
  const candidates = [
    {
      apiPath: "/open_api/v3.0/tools/orange_site/get/",
      query: cleanForCreate({
        advertiser_id: advertiserId,
        optimize_goal: JSON.stringify({ external_action: externalAction }),
        filtering: microAppInstanceId ? JSON.stringify({ micro_app_instance_id: microAppInstanceId }) : undefined,
        page,
        page_size: Math.min(20, positiveInt(pageSize, 20, 1, 20)),
      }),
      injected: {
        external_action: externalAction,
        micro_app_instance_id: microAppInstanceId ? String(microAppInstanceId) : "",
      },
    },
    {
      apiPath: "/open_api/2/tools/site/get/",
      query: { advertiser_id: advertiserId, page, page_size: pageSize },
    },
    {
      apiPath: "/open_api/2/tools/orange_site/get/",
      query: { advertiser_id: advertiserId, page, page_size: pageSize },
    },
  ];
  const errors = [];
  for (const candidate of candidates) {
    const result = await oceanGetWithAuth(candidate.apiPath, candidate.query);
    if (result.body && result.body.code === 0) {
      const data = result.body.data || {};
      const list = data.list || data.site_list || data.sites || data.records || [];
      const pageInfo = data.page_info || data.pageInfo || {};
      const normalized = Array.isArray(list)
        ? list.map(normalizeLandingPage).filter((item) => item.url).map((item) => ({
          ...item,
          raw: Object.assign({}, item.raw, candidate.injected || {}),
        }))
        : [];
      return {
        ok: true,
        apiPath: candidate.apiPath,
        list: normalized,
        pageInfo: {
          page: Number(pageInfo.page || page),
          page_size: Number(pageInfo.page_size || pageSize),
          total_number: Number(pageInfo.total_number || pageInfo.total_count || data.total_number || list.length || 0),
          total_page: Number(pageInfo.total_page || data.total_page || 1),
        },
      };
    }
    errors.push({
      api: candidate.apiPath,
      code: result.body && result.body.code,
      message: result.body && result.body.message,
      help_message: result.body && result.body.help_message,
    });
  }
  return {
    ok: false,
    list: [],
    pageInfo: { page, page_size: pageSize, total_number: 0, total_page: 1 },
    errors,
  };
}

async function fetchAwemeAccounts(advertiserId, page, pageSize) {
  const result = await oceanGetWithAuth("/open_api/2/tools/ies_account_search/", {
    advertiser_id: advertiserId,
    page,
    page_size: pageSize,
  });

  if (!result.body || result.body.code !== 0) {
    return {
      ok: false,
      code: result.body && result.body.code,
      message: result.body && result.body.message ? result.body.message : "抖音号列表获取失败",
      body: result.body,
    };
  }

  const data = normalizeAwemeListData(result.body.data);
  const list = data.list.slice();
  if (!list.length) {
    const fallback = fallbackAwemeAccount();
    if (fallback) list.push(fallback);
  }

  return {
    ok: true,
    list,
    pageInfo: Object.assign({}, data.pageInfo, {
      total_number: list.length,
      page_size: list.length || data.pageInfo.page_size,
    }),
  };
}

async function fetchMiniGames(advertiserId, productType, page, pageSize, organizationId) {
  const endpointConfigs = productType === "BYTE_GAME"
    ? [
      { apiPath: "/open_api/v3.0/tools/micro_game/list/", accountId: advertiserId, accountType: "AD" },
      { apiPath: "/open_api/v3.0/tools/ebp/micro_game/list/", accountId: organizationId, accountType: "EBP" },
    ]
    : [
      { apiPath: "/open_api/v3.0/tools/wechat_game/list/", accountId: advertiserId, accountType: "AD" },
      { apiPath: "/open_api/v3.0/tools/ebp/wechat_game/list/", accountId: organizationId, accountType: "EBP" },
    ];
  const errors = [];
  let emptySuccess = null;

  for (const endpoint of endpointConfigs) {
    const apiPath = endpoint.apiPath;
    const isEbpApi = apiPath.includes("/tools/ebp/");
    const query = isEbpApi
      ? {
        account_id: endpoint.accountId,
        account_type: endpoint.accountType,
        page,
        page_size: pageSize,
      }
      : productType === "WECHAT_GAME"
        ? {
          account_id: endpoint.accountId,
          account_type: endpoint.accountType,
          page,
          page_size: pageSize,
        }
        : {
          advertiser_id: advertiserId,
          page,
          page_size: pageSize,
        };
    if (productType === "BYTE_GAME") {
      query.filtering = JSON.stringify({ micro_promotion_type: "BYTE_GAME", mini_program_type: "BYTE_GAME" });
    }

    const result = await oceanGetWithAuth(apiPath, query);
    if (result.body && result.body.code === 0) {
      const data = result.body.data || {};
      const { list, total, totalPage } = extractListAndPageInfo(data);
      const normalized = list.map((item) => normalizeMiniGame(item, productType));
      const successResult = {
        apiPath,
        list: normalized,
        pageInfo: {
          page,
          page_size: pageSize,
          total_number: total,
          total_page: totalPage,
        },
        raw: result.body,
      };
      if (normalized.length) return successResult;
      if (!emptySuccess) emptySuccess = successResult;
      continue;
    }

    errors.push({
      apiPath,
      code: result.body && result.body.code,
      message: result.body && result.body.message,
      request_id: result.body && result.body.request_id,
    });
  }

  if (emptySuccess) return emptySuccess;
  return { apiPath: "", list: [], pageInfo: { page, page_size: pageSize, total_number: 0, total_page: 1 }, errors };
}

function oceanPost(hostname, apiPath, payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const request = https.request({
      hostname,
      path: apiPath,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
        "User-Agent": "oceanengine-batch-creator/0.1",
      },
    }, (response) => {
      let responseBody = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        responseBody += chunk;
      });
      response.on("end", () => {
        try {
          resolve({ statusCode: response.statusCode, body: JSON.parse(responseBody) });
        } catch (error) {
          reject(new Error(`巨量接口返回非 JSON：${responseBody.slice(0, 200)}`));
        }
      });
    });

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}

function oceanApiPostMultipart(apiPath, fields, files) {
  return new Promise((resolve, reject) => {
    const boundary = `----oceanengine-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const chunks = [];

    Object.keys(fields).forEach((key) => {
      if (fields[key] === undefined || fields[key] === null) return;
      chunks.push(Buffer.from(`--${boundary}\r\n`));
      chunks.push(Buffer.from(`Content-Disposition: form-data; name="${key}"\r\n\r\n`));
      chunks.push(Buffer.from(String(fields[key])));
      chunks.push(Buffer.from("\r\n"));
    });

    files.forEach((file) => {
      chunks.push(Buffer.from(`--${boundary}\r\n`));
      chunks.push(Buffer.from(`Content-Disposition: form-data; name="${file.fieldName}"; filename="${file.filename}"\r\n`));
      chunks.push(Buffer.from(`Content-Type: ${file.contentType || "application/octet-stream"}\r\n\r\n`));
      chunks.push(file.buffer);
      chunks.push(Buffer.from("\r\n"));
    });

    chunks.push(Buffer.from(`--${boundary}--\r\n`));
    const body = Buffer.concat(chunks);
    const request = https.request({
      hostname: API_HOST,
      path: apiPath,
      method: "POST",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        "Content-Length": body.length,
        "Access-Token": process.env.OCEANENGINE_ACCESS_TOKEN,
        "User-Agent": "oceanengine-batch-creator/0.1",
      },
    }, (response) => {
      let responseBody = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        responseBody += chunk;
      });
      response.on("end", () => {
        let parsed = null;
        try {
          parsed = JSON.parse(responseBody);
        } catch (error) {
          reject(new Error(`OceanEngine API returned non-JSON: ${responseBody.slice(0, 200)}`));
          return;
        }
        resolve({ statusCode: response.statusCode, body: parsed, raw: responseBody });
      });
    });

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}

function oceanApiPostRaw(apiPath, body) {
  return new Promise((resolve, reject) => {
    const request = https.request({
      hostname: API_HOST,
      path: apiPath,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
        "Access-Token": process.env.OCEANENGINE_ACCESS_TOKEN,
        "User-Agent": "oceanengine-batch-creator/0.1",
      },
    }, (response) => {
      let responseBody = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        responseBody += chunk;
      });
      response.on("end", () => {
        let parsed = null;
        try {
          parsed = JSON.parse(responseBody);
        } catch (error) {
          reject(new Error(`OceanEngine API returned non-JSON: ${responseBody.slice(0, 200)}`));
          return;
        }
        resolve({ statusCode: response.statusCode, body: parsed, raw: responseBody });
      });
    });

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}

async function oceanApiPostRawWithAuth(apiPath, body) {
  const result = await oceanApiPostRaw(apiPath, body);
  if (!isAccessTokenExpired(result.body)) return result;

  await refreshOAuthToken();
  return oceanApiPostRaw(apiPath, body);
}

async function oceanApiPostMultipartWithAuth(apiPath, fields, files) {
  const result = await oceanApiPostMultipart(apiPath, fields, files);
  if (!isAccessTokenExpired(result.body)) return result;

  await refreshOAuthToken();
  return oceanApiPostMultipart(apiPath, fields, files);
}

function cleanForCreate(value) {
  if (value === null || value === undefined || value === "") return undefined;
  if (Array.isArray(value)) {
    const items = value.map(cleanForCreate).filter((item) => item !== undefined);
    return items.length ? items : undefined;
  }
  if (typeof value === "object") {
    const object = {};
    Object.keys(value).forEach((key) => {
      const cleaned = cleanForCreate(value[key]);
      if (cleaned !== undefined) object[key] = cleaned;
    });
    return Object.keys(object).length ? object : undefined;
  }
  return value;
}

function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, filePath), "utf8"));
}

function extractInteger(raw, key) {
  const match = raw.match(new RegExp(`"${key}"\\s*:\\s*(\\d+)`));
  return match ? match[1] : null;
}

function parseWordList(value) {
  if (!value) return undefined;
  const items = String(value)
    .split(/[,，\s]+/)
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item));
  return items.length ? items : undefined;
}

function sanitizeMultipartFilename(value) {
  return path.basename(String(value || "video.mp4").replace(/\0/g, ""));
}

function parseMultipartBody(buffer, boundary) {
  const delimiter = Buffer.from(`--${boundary}`);
  const parts = [];
  let start = buffer.indexOf(delimiter);
  if (start === -1) return { fields: {}, files: [] };

  while (start !== -1) {
    start += delimiter.length;
    if (buffer[start] === 45 && buffer[start + 1] === 45) break;
    if (buffer[start] === 13 && buffer[start + 1] === 10) start += 2;

    const next = buffer.indexOf(delimiter, start);
    if (next === -1) break;
    let part = buffer.slice(start, next);
    if (part.length >= 2 && part[part.length - 2] === 13 && part[part.length - 1] === 10) {
      part = part.slice(0, -2);
    }
    parts.push(part);
    start = next;
  }

  const fields = {};
  const files = [];
  parts.forEach((part) => {
    const headerEnd = part.indexOf(Buffer.from("\r\n\r\n"));
    if (headerEnd === -1) return;
    const headerText = part.slice(0, headerEnd).toString("utf8");
    const content = part.slice(headerEnd + 4);
    const disposition = headerText.match(/content-disposition:\s*form-data;\s*([^\r\n]+)/i);
    if (!disposition) return;
    const nameMatch = disposition[1].match(/name="([^"]+)"/);
    if (!nameMatch) return;
    const filenameMatch = disposition[1].match(/filename="([^"]*)"/);
    const contentTypeMatch = headerText.match(/content-type:\s*([^\r\n]+)/i);
    const name = nameMatch[1];

    if (filenameMatch) {
      if (!filenameMatch[1] || content.length === 0) return;
      files.push({
        fieldName: name,
        filename: sanitizeMultipartFilename(filenameMatch[1]),
        contentType: contentTypeMatch ? contentTypeMatch[1].trim() : "application/octet-stream",
        buffer: content,
      });
      return;
    }

    fields[name] = content.toString("utf8");
  });

  return { fields, files };
}

function createProjectPayload(sourceProject, options, nameSuffix, advertiserId) {
  const budget = Number(options.budget || 300);
  const cpaBid = Number(options.cpaBid || 1.34);
  const projectContent = options.projectContent || {};
  const keep = [
    "advertiser_id",
    "name",
    "landing_type",
    "marketing_goal",
    "ad_type",
    "delivery_mode",
    "pricing",
    "optimize_goal",
    "delivery_setting",
    "delivery_range",
    "audience",
    "delivery_product",
    "delivery_type",
    "micro_promotion_type",
    "micro_app_instance_id",
    "track_url_setting",
    "ulink_type",
    "blue_flow_package",
    "internal_advertiser_info",
  ];
  let payload = {};
  keep.forEach((key) => {
    if (sourceProject[key] !== undefined && sourceProject[key] !== null) payload[key] = sourceProject[key];
  });
  payload = cleanForCreate(payload);
  payload.advertiser_id = Number(advertiserId || process.env.OCEANENGINE_ADVERTISER_ID);
  payload.name = options.projectName && options.projectName.trim()
    ? options.projectName.trim()
    : `${sourceProject.name}-${nameSuffix}`;
  payload.operation = options.projectStatus || "DISABLE";
  payload.landing_type = projectContent.landingType || payload.landing_type || "MICRO_GAME";
  payload.ad_type = projectContent.adType || payload.ad_type || "ALL";
  payload.delivery_type = projectContent.deliveryType || payload.delivery_type || "NORMAL";
  payload.delivery_mode = projectContent.deliveryMode || payload.delivery_mode || "PROCEDURAL";
  payload.marketing_goal = projectContent.marketingGoal || payload.marketing_goal || "VIDEO_AND_IMAGE";
  payload.delivery_setting = Object.assign({}, payload.delivery_setting, {
    budget,
    cpa_bid: cpaBid,
    first_roi_goal: 0,
    start_time: options.startDate || "2026-06-02",
    end_time: options.endDate || "2035-04-21",
  });
  payload.pricing = projectContent.pricing || payload.pricing || "PRICING_OCPM";
  payload.delivery_setting.schedule_type = projectContent.scheduleType || payload.delivery_setting.schedule_type || "SCHEDULE_FROM_NOW";
  payload.delivery_setting.budget_mode = projectContent.budgetMode || payload.delivery_setting.budget_mode || "BUDGET_MODE_DAY";
  payload.delivery_setting.bid_type = projectContent.bidStrategy || payload.delivery_setting.bid_type || "CUSTOM";
  delete payload.delivery_setting.budget_optimize_switch;
  if (payload.delivery_setting.bid_type === "NO_BID" && projectContent.budgetOptimizeSwitch === "ON") {
    payload.delivery_setting.budget_optimize_switch = "ON";
  }
  if (payload.delivery_setting.bid_type === "NO_BID") {
    delete payload.delivery_setting.cpa_bid;
    delete payload.delivery_setting.roi_goal;
    delete payload.delivery_setting.first_roi_goal;
  }
  payload.delivery_range = {
    inventory_catalog: projectContent.inventoryCatalog ||
      (payload.delivery_range && payload.delivery_range.inventory_catalog) ||
      "UNIVERSAL_SMART",
  };
  if (projectContent.deliveryProduct) {
    payload.delivery_product = projectContent.deliveryProduct;
    if (projectContent.deliveryProduct === "WECHAT_GAME") {
      payload.landing_type = "MICRO_GAME";
      payload.micro_promotion_type = "WECHAT_GAME";
    } else if (projectContent.deliveryProduct === "BYTE_GAME") {
      payload.landing_type = "MICRO_GAME";
      payload.micro_promotion_type = "BYTE_GAME";
    }
  }
  if (projectContent.microAppInstanceId && (projectContent.deliveryProduct === "WECHAT_GAME" || projectContent.deliveryProduct === "BYTE_GAME")) {
    payload.micro_app_instance_id = Number(projectContent.microAppInstanceId);
  }
  if (payload.landing_type !== "MICRO_GAME" || !["WECHAT_GAME", "BYTE_GAME"].includes(projectContent.deliveryProduct)) {
    delete payload.micro_promotion_type;
    delete payload.micro_app_instance_id;
  }
  payload.optimize_goal = {
    external_action: projectContent.externalAction || sourceProject.optimize_goal.external_action,
    external_actions: sourceProject.optimize_goal.external_actions,
  };
  if (projectContent.deepExternalAction) {
    payload.optimize_goal.deep_external_action = projectContent.deepExternalAction;
  }
  payload.audience = Object.assign({
    age: [],
    carrier: [],
    ac: [],
    device_brand: [],
    platform: [],
    auto_extend_targets: [],
    launch_price: [],
    interest_categories: [],
    interest_words: [],
    action_categories: [],
    action_words: [],
    aweme_fan_accounts: [],
    aweme_fan_categories: [],
    aweme_fan_behaviors: [],
    flow_package: [],
    exclude_flow_package: [],
    device_type: [],
    filter_event: [],
    geolocation: [],
    filter_aweme_abnormal_active: "OFF",
    filter_own_aweme_fans: "OFF",
  }, payload.audience);
  const targeting = projectContent.targeting || {};
  if (Array.isArray(targeting.age)) {
    payload.audience.age = targeting.age;
  }
  if (targeting.gender) {
    payload.audience.gender = targeting.gender;
  }
  if (Array.isArray(targeting.city) && targeting.city.length) {
    payload.audience.city = targeting.city;
    payload.audience.district = "REGION";
    if (targeting.locationType) {
      payload.audience.location_type = targeting.locationType;
    }
  }
  return payload;
}

function createPromotionBody(sourcePromotion, projectId, nameSuffix, advertiserId, options) {
  const promotionOptions = options.promotion || {};
  const creativeOptions = options.creative || promotionOptions.creative || {};
  const titlePackOptions = options.titlePack || promotionOptions.titlePack || {};
  const landingOptions = options.landing || promotionOptions.landing || {};
  const titleOptions = Array.isArray(titlePackOptions.titles) && titlePackOptions.titles.length
    ? titlePackOptions
    : {};
  const landingUrls = Array.isArray(landingOptions.urls) && landingOptions.urls.length
    ? landingOptions.urls
    : [];
  const materials = cleanForCreate(sourcePromotion.promotion_materials);
  if (materials && promotionOptions.callToActionButtons) {
    materials.call_to_action_buttons = promotionOptions.callToActionButtons.slice(0, 10);
  }
  if (materials && creativeOptions.dynamicCreativeSwitch) {
    materials.dynamic_creative_switch = creativeOptions.dynamicCreativeSwitch;
  }
  if (materials && materials.product_info) {
    materials.product_info = Object.assign({}, materials.product_info);
    if (promotionOptions.productName) materials.product_info.titles = [promotionOptions.productName];
    const sellingPoints = Array.isArray(promotionOptions.sellingPoints) && promotionOptions.sellingPoints.length
      ? promotionOptions.sellingPoints.slice(0, 10)
      : promotionOptions.sellingPoint
        ? [promotionOptions.sellingPoint]
        : null;
    if (sellingPoints) materials.product_info.selling_points = sellingPoints;
  }
  if (materials && materials.video_material_list) {
    materials.video_material_list = materials.video_material_list.map((item) => cleanForCreate({
      image_mode: item.image_mode,
      video_id: item.video_id,
      video_cover_id: item.video_cover_id,
      video_hp_visibility: item.video_hp_visibility,
    }));
  }
  if (materials && Array.isArray(creativeOptions.videoIds) && creativeOptions.videoIds.length) {
    const sourceVideos = Array.isArray(sourcePromotion.promotion_materials.video_material_list)
      ? sourcePromotion.promotion_materials.video_material_list
      : [];
    materials.video_material_list = creativeOptions.videoIds.map((videoId, index) => {
      const sourceVideo = sourceVideos[index] || sourceVideos[0] || {};
      return cleanForCreate({
        image_mode: sourceVideo.image_mode || "CREATIVE_IMAGE_MODE_VIDEO_VERTICAL",
        video_id: videoId,
        video_cover_id: creativeOptions.videoCoverIds && creativeOptions.videoCoverIds[index]
          ? creativeOptions.videoCoverIds[index]
          : sourceVideo.video_cover_id,
        video_hp_visibility: creativeOptions.videoHpVisibility || sourceVideo.video_hp_visibility,
      });
    });
  }
  if (materials && materials.title_material_list) {
    materials.title_material_list = materials.title_material_list.map((item) => cleanForCreate({
      title: item.title,
      word_list: item.word_list,
    }));
  }
  if (materials && Array.isArray(titleOptions.titles) && titleOptions.titles.length) {
    const sourceTitles = Array.isArray(sourcePromotion.promotion_materials.title_material_list)
      ? sourcePromotion.promotion_materials.title_material_list
      : [];
    const limit = Number(titleOptions.titlePerPromotion || titleOptions.titles.length || 200);
    materials.title_material_list = titleOptions.titles.slice(0, limit).map((title, index) => {
      const sourceTitle = sourceTitles[index] || sourceTitles[0] || {};
      return cleanForCreate({
        title,
        word_list: parseWordList(titleOptions.titleWordLists && titleOptions.titleWordLists[index]) || sourceTitle.word_list,
      });
    });
  }
  if (materials && Array.isArray(landingUrls) && landingUrls.length) {
    const limit = Number(landingOptions.perPromotion || landingUrls.length || 20);
    materials.external_url_material_list = landingUrls.slice(0, limit);
  }

  const nativeSetting = Object.assign({}, sourcePromotion.native_setting);
  if (promotionOptions.identity === "AWEME" && promotionOptions.awemeId) {
    nativeSetting.aweme_id = promotionOptions.awemeId;
  }

  const payload = cleanForCreate({
    advertiser_id: Number(advertiserId || process.env.OCEANENGINE_ADVERTISER_ID),
    project_id: "__PROJECT_ID__",
    name: promotionOptions.name && promotionOptions.name.trim()
      ? promotionOptions.name.trim()
      : `${sourcePromotion.promotion_name}-${nameSuffix}`,
    opt_status: promotionOptions.status || "DISABLE",
    is_comment_disable: promotionOptions.commentDisable || sourcePromotion.is_comment_disable,
    ad_download_status: sourcePromotion.ad_download_status,
    native_setting: nativeSetting,
    promotion_materials: materials,
    schedule_time: sourcePromotion.schedule_time,
    source: promotionOptions.source || sourcePromotion.source,
    star_auto_delivery_switch: sourcePromotion.star_auto_delivery_switch,
  });

  return JSON.stringify(payload).replace('"__PROJECT_ID__"', projectId);
}

async function updateProjectStatus(projectId, optStatus, advertiserId) {
  const body = `{"advertiser_id":${advertiserId || process.env.OCEANENGINE_ADVERTISER_ID},"data":[{"project_id":${projectId},"opt_status":"${optStatus}"}]}`;
  return oceanApiPostRawWithAuth("/open_api/v3.0/project/status/update/", body);
}

async function updatePromotionStatus(promotionId, optStatus, advertiserId) {
  const body = `{"advertiser_id":${advertiserId || process.env.OCEANENGINE_ADVERTISER_ID},"data":[{"promotion_id":${promotionId},"opt_status":"${optStatus}"}]}`;
  return oceanApiPostRawWithAuth("/open_api/v3.0/promotion/status/update/", body);
}

function extractVideoId(body) {
  const data = body && body.data ? body.data : {};
  return data.video_id || data.id || data.material_id || data.video_material_id || null;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function logStep(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

function isRateLimitMessage(message) {
  const text = String(message || "");
  if (text.includes("频率") || text.includes("限流") || text.includes("超限") || text.includes("稍后")) {
    return true;
  }
  return /频率|限流|超限|稍后|too\s*many|rate/i.test(String(message || ""));
}

function extractVideoCoverId(body) {
  const data = body && body.data ? body.data : {};
  const candidates = [
    data.video_cover_id,
    data.videoCoverId,
    data.cover_id,
    data.coverId,
    data.image_id,
    data.id,
  ];
  for (const value of candidates) {
    if (value) return String(value);
  }

  const list = data.list || data.images || data.cover_list || [];
  if (Array.isArray(list) && list.length) {
    const first = list[0];
    return first.id || first.image_id || first.material_id || first.cover_id
      ? String(first.id || first.image_id || first.material_id || first.cover_id)
      : "";
  }
  return "";
}

async function fetchVideoCoverId(advertiserId, videoId) {
  const waits = [0, 7000, 7000, 10000, 10000, 15000, 15000, 20000];
  let lastMessage = "";

  for (const waitMs of waits) {
    if (waitMs) await sleep(waitMs);
    const result = await oceanGetWithAuth("/open_api/2/tools/video_cover/suggest/", {
      advertiser_id: advertiserId,
      video_id: videoId,
    });

    if (!result.body || result.body.code !== 0) {
      lastMessage = result.body && result.body.message ? result.body.message : "获取视频默认封面失败";
      continue;
    }

    const status = result.body.data && result.body.data.status;
    const coverId = extractVideoCoverId(result.body);
    if (coverId) return coverId;
    lastMessage = status === "RUNNING"
      ? "视频默认封面仍在生成中"
      : "未返回可用视频默认封面";
  }

  throw new Error(`视频 ${videoId} 默认首帧封面获取失败：${lastMessage || "请稍后重试"}`);
}

async function uploadLocalVideo(advertiserId, file, uploadCache) {
  const signature = crypto.createHash("md5").update(file.buffer).digest("hex");
  if (uploadCache && uploadCache.has(signature)) {
    logStep(`reuse local video ${file.filename} for advertiser ${advertiserId}`);
    const cached = uploadCache.get(signature);
    return {
      ...cached,
      filename: file.filename,
      signature,
      reused: true,
    };
  }

  const waits = [0, 30000, 60000, 120000, 180000];
  let result = null;
  let lastMessage = "";

  for (const waitMs of waits) {
    if (waitMs) await sleep(waitMs);
    logStep(`upload local video ${file.filename} for advertiser ${advertiserId}`);
    result = await oceanApiPostMultipartWithAuth("/open_api/2/file/video/ad/", {
      advertiser_id: advertiserId,
      video_signature: signature,
    }, [{
      fieldName: "video_file",
      filename: file.filename,
      contentType: file.contentType,
      buffer: file.buffer,
    }]);

    if (result.body && result.body.code === 0) break;
    lastMessage = result.body && result.body.message ? result.body.message : "视频上传失败";
    if (!isRateLimitMessage(lastMessage)) break;
  }

  if (!result.body || result.body.code !== 0) {
    const message = lastMessage || (result.body && result.body.message ? result.body.message : "视频上传失败");
    throw new Error(`${file.filename} 上传失败：${message}`);
  }

  const videoId = extractVideoId(result.body);
  if (!videoId) {
    throw new Error(`${file.filename} 上传成功但未返回 video_id`);
  }

  const videoCoverId = extractVideoCoverId(result.body) || await fetchVideoCoverId(advertiserId, String(videoId));

  const uploaded = {
    filename: file.filename,
    videoId: String(videoId),
    videoCoverId,
    requestId: result.body.request_id,
    signature,
    reused: false,
  };
  if (uploadCache) {
    uploadCache.set(signature, {
      ...uploaded,
      sourceAdvertiserId: advertiserId,
    });
  }
  return uploaded;
}

async function uploadLocalVideos(advertiserId, files, uploadCache) {
  const uploaded = [];
  for (const [index, file] of files.entries()) {
    if (index > 0) await sleep(8000);
    uploaded.push(await uploadLocalVideo(advertiserId, file, uploadCache));
  }
  return uploaded;
}

function positiveInt(value, fallback, min = 1, max = Number.MAX_SAFE_INTEGER) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, Math.floor(number)));
}

function pickUnitItems(items, unitIndex, perUnitCount) {
  if (!Array.isArray(items) || !items.length || perUnitCount <= 0) return [];
  if (items.length >= (unitIndex + 1) * perUnitCount) {
    return items.slice(unitIndex * perUnitCount, (unitIndex + 1) * perUnitCount);
  }
  const picked = [];
  for (let offset = 0; offset < perUnitCount; offset += 1) {
    picked.push(items[(unitIndex * perUnitCount + offset) % items.length]);
  }
  return picked;
}

function buildUnitLandingOptions(landingOptions, unitIndex, accountIndex) {
  const urls = Array.isArray(landingOptions.urls) ? landingOptions.urls : [];
  const names = Array.isArray(landingOptions.names) ? landingOptions.names : [];
  const perPromotion = positiveInt(landingOptions.perPromotion, urls.length || 1, 1, 20);
  const distribution = landingOptions.distribution || "SAME";
  let pickerIndex = 0;
  if (distribution === "PROMOTION") {
    pickerIndex = unitIndex;
  } else if (distribution === "ACCOUNT" || distribution === "PROJECT") {
    pickerIndex = positiveInt(accountIndex, 0, 0);
  }
  return {
    ...landingOptions,
    urls: pickUnitItems(urls, pickerIndex, perPromotion),
    names: pickUnitItems(names, pickerIndex, perPromotion),
  };
}

function buildUniqueName(prefix, suffix, maxLength = 100) {
  const cleanPrefix = String(prefix || "promotion").trim();
  const cleanSuffix = String(suffix || "").trim();
  const tail = cleanSuffix ? `-${cleanSuffix}` : "";
  const prefixLimit = Math.max(1, maxLength - tail.length);
  return `${cleanPrefix.slice(0, prefixLimit)}${tail}`;
}

function buildPromotionName(baseName, groupName, unitIndex, totalUnits, runSuffix) {
  const suffix = String(unitIndex + 1).padStart(2, "0");
  const prefix = baseName || groupName || "promotion";
  const uniqueSuffix = totalUnits > 1 ? `${runSuffix}-${suffix}` : runSuffix;
  return buildUniqueName(prefix, uniqueSuffix);
}

function buildUnitOptions(options, unitIndex, totalUnits) {
  const creative = options.creative || {};
  const perUnitVideoCount = positiveInt(
    creative.videoCount,
    Array.isArray(creative.videoIds) && creative.videoIds.length ? creative.videoIds.length : 1,
    0,
    30
  );
  const unitVideoIds = pickUnitItems(creative.videoIds || [], unitIndex, perUnitVideoCount);
  const unitVideoCoverIds = pickUnitItems(creative.videoCoverIds || [], unitIndex, perUnitVideoCount);
  const basePromotion = options.promotion || {};
  return {
    ...options,
    promotion: {
      ...basePromotion,
      name: buildPromotionName(basePromotion.name, creative.groupName, unitIndex, totalUnits, options.runSuffix),
    },
    landing: buildUnitLandingOptions(options.landing || {}, unitIndex, options.accountIndex || 0),
    creative: {
      ...creative,
      videoIds: unitVideoIds,
      videoCoverIds: unitVideoCoverIds,
    },
  };
}

async function cloneOneProjectAndPromotion(options) {
  if (!process.env.OCEANENGINE_ACCESS_TOKEN) {
    throw new Error("Missing OCEANENGINE_ACCESS_TOKEN. Please authorize first.");
  }

  const budget = Number(options.budget || 300);
  const advertiserId = String(options.advertiserId || process.env.OCEANENGINE_ADVERTISER_ID);
  const projectStatus = options.projectStatus || "DISABLE";
  if (!Number.isFinite(budget) || budget < 300) {
    throw new Error("Project budget must be at least 300.");
  }

  const sourceProject = readJsonFile("data/source-project.json").data.list[0];
  const sourcePromotion = readJsonFile("data/source-promotions.json").data.list[0];
  const runSuffix = options.runSuffix || `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
  const nameSuffix = options.nameSuffix || `复制-${runSuffix}`;
  const localVideoFiles = Array.isArray(options.localVideoFiles) ? options.localVideoFiles : [];
  let uploadedVideos = [];
  let effectiveOptions = options;

  if (localVideoFiles.length) {
    uploadedVideos = await uploadLocalVideos(advertiserId, localVideoFiles, options.localVideoUploadCache);
    effectiveOptions = {
      ...options,
      creative: {
        ...(options.creative || {}),
        videoSource: "LOCAL_UPLOAD",
        videoIds: uploadedVideos.map((item) => item.videoId),
        videoCoverIds: uploadedVideos.map((item) => item.videoCoverId),
      },
    };
  }

  const projectPayload = createProjectPayload(sourceProject, effectiveOptions, nameSuffix, advertiserId);
  const projectBody = JSON.stringify(projectPayload);
  fs.writeFileSync(path.join(ROOT, "data/create-project-request.json"), JSON.stringify(projectPayload, null, 2), "utf8");
  logStep(`create project for advertiser ${advertiserId}`);
  const projectResult = await oceanApiPostRawWithAuth("/open_api/v3.0/project/create/", projectBody);
  fs.writeFileSync(path.join(ROOT, "data/create-project-response.json"), projectResult.raw, "utf8");
  if (projectResult.body.code !== 0) {
    throw new Error(`Create project failed: ${projectResult.body.message}`);
  }

  const projectId = extractInteger(projectResult.raw, "project_id");
  if (!projectId) throw new Error("Create project response did not contain project_id.");

  const projectStatusResult = await updateProjectStatus(projectId, projectStatus, advertiserId);
  fs.writeFileSync(path.join(ROOT, "data/project-status-update-response.json"), projectStatusResult.raw, "utf8");
  if (projectStatusResult.body.code !== 0) {
    throw new Error(`Disable project failed: ${projectStatusResult.body.message}`);
  }

  const creativeOptions = effectiveOptions.creative || {};
  const promotionCount = positiveInt(creativeOptions.groupCount, 1, 1, 500);
  const promotions = [];
  const promotionStatus = options.promotion && options.promotion.status ? options.promotion.status : "DISABLE";

  for (let unitIndex = 0; unitIndex < promotionCount; unitIndex += 1) {
    const unitOptions = buildUnitOptions({ ...effectiveOptions, runSuffix }, unitIndex, promotionCount);
    const promotionBody = createPromotionBody(sourcePromotion, projectId, nameSuffix, advertiserId, unitOptions);
    fs.writeFileSync(path.join(ROOT, "data/create-promotion-request.json"), promotionBody, "utf8");
    logStep(`create promotion ${unitIndex + 1}/${promotionCount} for project ${projectId}`);
    const promotionResult = await oceanApiPostRawWithAuth("/open_api/v3.0/promotion/create/", promotionBody);
    fs.writeFileSync(path.join(ROOT, "data/create-promotion-response.json"), promotionResult.raw, "utf8");
    if (promotionResult.body.code !== 0) {
      throw new Error(`Create promotion ${unitIndex + 1}/${promotionCount} failed: ${promotionResult.body.message}`);
    }

    const promotionId = extractInteger(promotionResult.raw, "promotion_id");
    if (!promotionId) throw new Error(`Create promotion ${unitIndex + 1}/${promotionCount} response did not contain promotion_id.`);

    promotions.push({
      promotionId,
      promotionName: unitOptions.promotion && unitOptions.promotion.name
        ? unitOptions.promotion.name
        : `${sourcePromotion.promotion_name}-${nameSuffix}`,
      promotionStatus,
      videoCount: Array.isArray(unitOptions.creative && unitOptions.creative.videoIds)
        ? unitOptions.creative.videoIds.length
        : 0,
    });
  }

  return {
    projectId,
    promotionId: promotions.map((item) => item.promotionId).join(", "),
    promotionIds: promotions.map((item) => item.promotionId),
    projectName: projectPayload.name,
    promotionName: promotions.map((item) => item.promotionName).join(", "),
    promotions,
    advertiserId,
    budget,
    cpaBid: Number(effectiveOptions.cpaBid || 1.34),
    projectStatus,
    promotionStatus,
    uploadedVideos,
  };
}

function normalizeAdvertiserIds(options) {
  const rawIds = [];
  if (Array.isArray(options.advertiserIds)) {
    rawIds.push(...options.advertiserIds);
  }
  if (options.advertiserId) {
    rawIds.push(options.advertiserId);
  }
  if (!rawIds.length && process.env.OCEANENGINE_ADVERTISER_ID) {
    rawIds.push(process.env.OCEANENGINE_ADVERTISER_ID);
  }

  const advertiserIds = Array.from(new Set(
    rawIds.map((item) => String(item || "").trim()).filter(Boolean)
  ));
  if (!advertiserIds.length) {
    throw new Error("Missing advertiser ID.");
  }
  if (advertiserIds.length > 20) {
    throw new Error("A maximum of 20 advertiser accounts can be selected at once.");
  }
  return advertiserIds;
}

async function cloneBatchProjectAndPromotion(options) {
  const advertiserIds = normalizeAdvertiserIds(options);
  const results = [];
  const localVideoUploadCache = new Map();

  for (const [accountIndex, advertiserId] of advertiserIds.entries()) {
    try {
      const result = await cloneOneProjectAndPromotion({
        ...options,
        advertiserId,
        accountIndex,
        advertiserIds: undefined,
        localVideoUploadCache,
      });
      results.push({
        code: 0,
        message: "OK",
        ...result,
      });
    } catch (error) {
      results.push({
        code: 500,
        advertiserId,
        message: error.message,
      });
    }
  }

  const successCount = results.filter((item) => item.code === 0).length;
  return {
    total: advertiserIds.length,
    successCount,
    failureCount: advertiserIds.length - successCount,
    budget: Number(options.budget || 300),
    results,
  };
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("请求体必须是 JSON"));
      }
    });
    req.on("error", reject);
  });
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    req.on("error", reject);
  });
}

async function readCloneRequest(req) {
  const contentType = req.headers["content-type"] || "";
  if (!contentType.startsWith("multipart/form-data")) {
    return { body: await readBody(req), files: [] };
  }

  const boundaryMatch = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!boundaryMatch) {
    throw new Error("multipart/form-data 缺少 boundary");
  }

  const raw = await readRawBody(req);
  const parsed = parseMultipartBody(raw, boundaryMatch[1] || boundaryMatch[2]);
  const payloadText = parsed.fields.payload || "{}";
  let body = {};
  try {
    body = JSON.parse(payloadText);
  } catch (error) {
    throw new Error("payload 必须是 JSON");
  }

  return {
    body,
    files: parsed.files.filter((file) => file.fieldName === "localVideos"),
  };
}

function updateEnv(updates) {
  const envPath = path.join(ROOT, ".env");
  const existing = fs.existsSync(envPath)
    ? fs.readFileSync(envPath, "utf8").split(/\r?\n/)
    : [];
  const used = new Set();
  const lines = existing.map((line) => {
    const index = line.indexOf("=");
    if (index === -1) return line;
    const key = line.slice(0, index).trim();
    if (!Object.prototype.hasOwnProperty.call(updates, key)) return line;
    used.add(key);
    return `${key}=${updates[key] || ""}`;
  });

  Object.keys(updates).forEach((key) => {
    if (!used.has(key)) lines.push(`${key}=${updates[key] || ""}`);
  });

  fs.writeFileSync(envPath, `${lines.filter(Boolean).join("\n")}\n`, "utf8");
  Object.assign(process.env, updates);
}

function saveTokenPayload(payload) {
  const data = payload && payload.data ? payload.data : {};
  const accessToken = data.access_token || data.accessToken;
  const refreshToken = data.refresh_token || data.refreshToken;
  const updates = {};

  if (accessToken) updates.OCEANENGINE_ACCESS_TOKEN = accessToken;
  if (refreshToken) updates.OCEANENGINE_REFRESH_TOKEN = refreshToken;
  if (Object.keys(updates).length) updateEnv(updates);
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const target = path.normalize(path.join(ROOT, pathname));

  if (!target.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (!fs.existsSync(target) || fs.statSync(target).isDirectory()) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const ext = path.extname(target).toLowerCase();
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
  };

  res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
  fs.createReadStream(target).pipe(res);
}

async function handleApi(req, res) {
  const config = readConfig();

  if (req.url === "/api/config") {
    json(res, 200, config);
    return;
  }

  if (req.url === "/api/source-project") {
    if (!process.env.OCEANENGINE_ACCESS_TOKEN) {
      json(res, 401, {
        message: "缺少 OCEANENGINE_ACCESS_TOKEN，请在 .env 中配置授权广告主 AccessToken。",
        config,
      });
      return;
    }

    try {
      const result = await oceanGetWithAuth("/open_api/v3.0/project/list/", {
        advertiser_id: config.advertiserId,
        filtering: JSON.stringify({ ids: [config.sourceProjectId] }),
        page: 1,
        page_size: 10,
      });

      json(res, result.statusCode || 200, result.body);
    } catch (error) {
      json(res, 502, { message: error.message });
    }
    return;
  }

  if (req.url === "/api/advertisers") {
    if (!process.env.OCEANENGINE_ACCESS_TOKEN) {
      json(res, 401, {
        message: "Missing OCEANENGINE_ACCESS_TOKEN. Please authorize first.",
        config,
      });
      return;
    }

    try {
      const result = await oceanGetWithAuth("/open_api/oauth2/advertiser/get/", {
        app_id: config.appId,
        secret: process.env.OCEANENGINE_SECRET,
      });
      const oauthList = result.body && result.body.data && result.body.data.list
        ? result.body.data.list
        : [];
      const merged = oauthList.slice();
      const warnings = [];

      for (const account of oauthList) {
        const parentId = account.advertiser_id || account.account_id;
        if (!parentId) continue;

        const ebpResult = await fetchEbpAdvertisers(parentId);
        if (ebpResult.ok) {
          ebpResult.list.forEach((item) => {
            merged.push({
              advertiser_id: item.account_id,
              advertiser_name: item.account_name,
              account_id: item.account_id,
              account_name: item.account_name,
              account_type: item.account_type,
              parent_organization_id: parentId,
              parent_organization_name: account.advertiser_name || account.account_name,
              is_valid: true,
            });
          });
          continue;
        }
        warnings.push({
          advertiser_id: parentId,
          api: "/open_api/2/ebp/advertiser/list/",
          message: ebpResult.message,
        });

        const childResult = await oceanGetWithAuth("/open_api/2/agent/advertiser/select/", {
          advertiser_id: parentId,
          page: 1,
          page_size: 100,
        });

        if (childResult.body && childResult.body.code === 0 && childResult.body.data && childResult.body.data.list) {
          childResult.body.data.list.forEach((item) => merged.push(item));
        } else if (childResult.body && childResult.body.message) {
          warnings.push({
            advertiser_id: parentId,
            api: "/open_api/2/agent/advertiser/select/",
            message: childResult.body.message,
            help_message: childResult.body.help_message,
          });
        }
      }

      const seen = new Set();
      const list = merged.filter((item) => {
        const id = String(item.advertiser_id || item.account_id || "");
        if (!id || seen.has(id)) return false;
        seen.add(id);
        return true;
      });

      json(res, result.statusCode || 200, {
        code: result.body.code,
        message: result.body.message,
        request_id: result.body.request_id,
        data: { list },
        warnings,
      });
    } catch (error) {
      json(res, 502, { message: error.message });
    }
    return;
  }

  if (req.url.startsWith("/api/mini-games")) {
    if (!process.env.OCEANENGINE_ACCESS_TOKEN) {
      json(res, 401, {
        code: 401,
        message: "Missing OCEANENGINE_ACCESS_TOKEN. Please authorize first.",
        config,
      });
      return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);
    const advertiserId = url.searchParams.get("advertiser_id") || url.searchParams.get("advertiserId") || config.advertiserId;
    const productType = url.searchParams.get("product_type") || url.searchParams.get("productType") || "WECHAT_GAME";
    const keyword = (url.searchParams.get("keyword") || "").trim().toLowerCase();
    const page = Number(url.searchParams.get("page") || 1);
    const pageSize = Number(url.searchParams.get("page_size") || url.searchParams.get("pageSize") || 10);

    try {
      const result = await fetchMiniGames(advertiserId, productType === "BYTE_GAME" ? "BYTE_GAME" : "WECHAT_GAME", page, pageSize, config.organizationId);
      const filtered = keyword
        ? result.list.filter((item) => item.name.toLowerCase().includes(keyword) || item.instance_id.includes(keyword))
        : result.list;
      json(res, 200, {
        code: result.errors && result.errors.length ? 207 : 0,
        message: result.errors && result.errors.length ? "小游戏接口未全部可用，已返回可用结果或错误详情" : "OK",
        data: {
          api_path: result.apiPath,
          list: filtered,
          page_info: Object.assign({}, result.pageInfo, {
            total_number: keyword ? filtered.length : result.pageInfo.total_number,
          }),
        },
        errors: result.errors || [],
      });
    } catch (error) {
      json(res, 502, { code: 502, message: error.message });
    }
    return;
  }

  if (req.url.startsWith("/api/landing-pages")) {
    if (!process.env.OCEANENGINE_ACCESS_TOKEN) {
      json(res, 401, {
        code: 401,
        message: "Missing OCEANENGINE_ACCESS_TOKEN. Please authorize first.",
        config,
      });
      return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);
    const advertiserId = url.searchParams.get("advertiser_id") || url.searchParams.get("advertiserId") || config.advertiserId;
    const keyword = (url.searchParams.get("keyword") || "").trim().toLowerCase();
    const externalAction = url.searchParams.get("external_action") || url.searchParams.get("externalAction") || "";
    const microAppInstanceId = url.searchParams.get("micro_app_instance_id") || url.searchParams.get("microAppInstanceId") || "";
    const currentTime = url.searchParams.get("current_time") || url.searchParams.get("currentTime") || "";
    const page = Number(url.searchParams.get("page") || 1);
    const pageSize = Number(url.searchParams.get("page_size") || url.searchParams.get("pageSize") || 100);

    try {
      let result = await fetchLandingPagesFromPromotions(advertiserId, page, pageSize);
      if (!result.ok) {
        json(res, 502, {
          code: 502,
          message: "落地页列表获取失败",
          errors: result.errors || [],
        });
        return;
      }
      const matched = filterLandingPages(result.list, {
        externalAction,
        microAppInstanceId,
        currentTime,
      });
      let sourceApiPath = result.apiPath;
      let sourcePageInfo = result.pageInfo;
      let sourceList = matched;
      if (!sourceList.length) {
        const orangeResult = await fetchLandingPages(advertiserId, page, pageSize, {
          externalAction,
          microAppInstanceId,
        });
        if (orangeResult.ok) {
          sourceApiPath = orangeResult.apiPath;
          sourcePageInfo = orangeResult.pageInfo;
          sourceList = filterLandingPages(orangeResult.list, {
            externalAction,
            microAppInstanceId,
            currentTime,
          });
        }
      }
      const filtered = keyword
        ? sourceList.filter((item) => item.name.toLowerCase().includes(keyword) || item.url.toLowerCase().includes(keyword) || item.id.includes(keyword))
        : sourceList;
      json(res, 200, {
        code: 0,
        message: "OK",
        data: {
          api_path: sourceApiPath,
          list: filtered,
          page_info: Object.assign({}, sourcePageInfo, {
            total_number: filtered.length,
          }),
          filters: {
            external_action: externalAction,
            micro_app_instance_id: microAppInstanceId,
            current_time: currentTime || new Date().toISOString(),
          },
        },
      });
    } catch (error) {
      json(res, 502, { code: 502, message: error.message });
    }
    return;
  }

  if (req.url.startsWith("/api/aweme-accounts")) {
    if (!process.env.OCEANENGINE_ACCESS_TOKEN) {
      json(res, 401, {
        code: 401,
        message: "Missing OCEANENGINE_ACCESS_TOKEN. Please authorize first.",
        config,
      });
      return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);
    const advertiserId = url.searchParams.get("advertiser_id") || url.searchParams.get("advertiserId") || config.advertiserId;
    const page = Number(url.searchParams.get("page") || 1);
    const pageSize = Number(url.searchParams.get("page_size") || url.searchParams.get("pageSize") || 100);

    try {
      const result = await fetchAwemeAccounts(advertiserId, page, pageSize);
      if (!result.ok) {
        json(res, 502, {
          code: result.code || 502,
          message: result.message,
          body: result.body,
        });
        return;
      }

      json(res, 200, {
        code: 0,
        message: "OK",
        data: {
          list: result.list,
          page_info: result.pageInfo,
        },
      });
    } catch (error) {
      json(res, 502, { code: 502, message: error.message });
    }
    return;
  }

  if (req.url.startsWith("/api/oauth/exchange")) {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const body = req.method === "POST" ? await readBody(req) : {};
    const authCode = body.auth_code || body.authCode || url.searchParams.get("auth_code") || url.searchParams.get("code");

    if (!process.env.OCEANENGINE_SECRET) {
      json(res, 400, { message: "缺少 OCEANENGINE_SECRET。" });
      return;
    }
    if (!authCode) {
      json(res, 400, { message: "缺少 auth_code。请先完成广告主授权，并把回调 URL 里的 code/auth_code 提供给该接口。" });
      return;
    }

    try {
      const result = await oceanPost(AUTH_HOST, "/open_api/oauth2/access_token/", {
        app_id: config.appId,
        secret: process.env.OCEANENGINE_SECRET,
        auth_code: authCode,
      });
      saveTokenPayload(result.body);
      json(res, result.statusCode || 200, {
        ...result.body,
        saved: readConfig(),
      });
    } catch (error) {
      json(res, 502, { message: error.message });
    }
    return;
  }

  if (req.url.startsWith("/api/oauth/callback")) {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const authCode = url.searchParams.get("auth_code") || url.searchParams.get("code");
    const error = url.searchParams.get("error") || url.searchParams.get("message");

    if (error) {
      html(res, 400, `<h1>授权失败</h1><p>${error}</p>`);
      return;
    }
    if (!authCode) {
      html(res, 400, "<h1>未收到授权码</h1><p>回调 URL 中没有 code 或 auth_code 参数。</p>");
      return;
    }
    if (!process.env.OCEANENGINE_SECRET) {
      html(res, 400, "<h1>缺少 Secret</h1><p>请先在 .env 中配置 OCEANENGINE_SECRET。</p>");
      return;
    }

    try {
      const result = await oceanPost(AUTH_HOST, "/open_api/oauth2/access_token/", {
        app_id: config.appId,
        secret: process.env.OCEANENGINE_SECRET,
        auth_code: authCode,
      });
      saveTokenPayload(result.body);
      const saved = readConfig();
      html(res, 200, `
        <!doctype html>
        <html lang="zh-CN">
        <head><meta charset="utf-8"><title>授权完成</title></head>
        <body style="font-family:Arial,'Microsoft YaHei',sans-serif;padding:40px;background:#f5f6f8;color:#1f2937">
          <div style="max-width:720px;margin:auto;background:#fff;border:1px solid #e7eaf0;padding:28px;border-radius:6px">
            <h1 style="margin-top:0">授权完成</h1>
            <p>已尝试用授权码换取 Token，并写入本地 .env。</p>
            <ul>
              <li>Access Token：${saved.hasAccessToken ? "已保存" : "未获取到"}</li>
              <li>Refresh Token：${saved.hasRefreshToken ? "已保存" : "未获取到"}</li>
              <li>广告主 ID：${saved.advertiserId}</li>
            </ul>
            <pre style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e7eaf0;padding:12px">${JSON.stringify(result.body, null, 2)}</pre>
            <p><a href="/" style="color:#176bff">返回批量创编页面</a></p>
          </div>
        </body>
        </html>
      `);
    } catch (exchangeError) {
      html(res, 502, `<h1>换取 Token 失败</h1><p>${exchangeError.message}</p>`);
    }
    return;
  }

  if (req.url === "/api/oauth/refresh") {
    if (!process.env.OCEANENGINE_SECRET || !process.env.OCEANENGINE_REFRESH_TOKEN) {
      json(res, 400, { message: "缺少 OCEANENGINE_SECRET 或 OCEANENGINE_REFRESH_TOKEN。" });
      return;
    }

    try {
      const result = await oceanPost(AUTH_HOST, "/open_api/oauth2/refresh_token/", {
        app_id: config.appId,
        secret: process.env.OCEANENGINE_SECRET,
        refresh_token: process.env.OCEANENGINE_REFRESH_TOKEN,
      });
      saveTokenPayload(result.body);
      json(res, result.statusCode || 200, {
        ...result.body,
        saved: readConfig(),
      });
    } catch (error) {
      json(res, 502, { message: error.message });
    }
    return;
  }

  if (req.url === "/api/clone-one") {
    if (req.method !== "POST") {
      json(res, 405, { message: "Method not allowed" });
      return;
    }

    try {
      const cloneRequest = await readCloneRequest(req);
      const body = cloneRequest.body;
      const result = await cloneBatchProjectAndPromotion({
        budget: body.budget || 300,
        cpaBid: body.cpaBid,
        projectName: body.projectName,
        projectStatus: body.projectStatus,
        startDate: body.startDate,
        endDate: body.endDate,
        projectContent: body.projectContent,
        promotion: body.promotion,
        creative: body.creative,
        titlePack: body.titlePack,
        landing: body.landing,
        nameSuffix: body.nameSuffix,
        advertiserId: body.advertiserId,
        advertiserIds: body.advertiserIds,
        localVideoFiles: cloneRequest.files,
      });
      json(res, 200, { code: 0, message: "OK", data: result });
    } catch (error) {
      json(res, 500, { code: 500, message: error.message });
    }
    return;
  }

  json(res, 404, { message: "Unknown API route" });
}

loadEnv();

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/")) {
    handleApi(req, res);
    return;
  }
  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`巨量批量创编工具已启动：http://localhost:${PORT}`);
});
