const estimate = document.querySelector("#estimate");
const createButton = document.querySelector("#previewButton");
const account = document.querySelector("#account");
const ruleText = document.querySelector("#ruleText");
const budgetInput = document.querySelector("#budgetInput");
const resultPanel = document.querySelector("#resultPanel");
const changeAccount = document.querySelector("#changeAccount");
const accountModal = document.querySelector("#accountModal");
const closeAccountModal = document.querySelector("#closeAccountModal");
const cancelAccountModal = document.querySelector("#cancelAccountModal");
const accountRows = document.querySelector("#accountRows");
const accountSearch = document.querySelector("#accountSearch");
const reloadAccounts = document.querySelector("#reloadAccounts");
const clearAccountSearch = document.querySelector("#clearAccountSearch");
const clearSelectedAccount = document.querySelector("#clearSelectedAccount");
const confirmAccount = document.querySelector("#confirmAccount");
const selectedAccountCount = document.querySelector("#selectedAccountCount");
const selectedAccountName = document.querySelector("#selectedAccountName");
const accountPageInfo = document.querySelector("#accountPageInfo");
const accountWarning = document.querySelector("#accountWarning");
const editProject = document.querySelector("#editProject");
const projectModal = document.querySelector("#projectModal");
const closeProjectModal = document.querySelector("#closeProjectModal");
const cancelProjectModal = document.querySelector("#cancelProjectModal");
const saveProjectConfig = document.querySelector("#saveProjectConfig");
const projectBudget = document.querySelector("#projectBudget");
const projectCpaBid = document.querySelector("#projectCpaBid");
const projectName = document.querySelector("#projectName");
const projectStatus = document.querySelector("#projectStatus");
const projectStartDate = document.querySelector("#projectStartDate");
const projectEndDate = document.querySelector("#projectEndDate");
const projectRandomSuffix = document.querySelector("#projectRandomSuffix");
const projectSummary = document.querySelector("#projectSummary");
const projectAdType = document.querySelector("#projectAdType");
const projectDeliveryType = document.querySelector("#projectDeliveryType");
const projectDeliveryMode = document.querySelector("#projectDeliveryMode");
const projectMarketingGoal = document.querySelector("#projectMarketingGoal");
const projectExternalAction = document.querySelector("#projectExternalAction");
const projectDeepExternalAction = document.querySelector("#projectDeepExternalAction");
const microAppInstanceId = document.querySelector("#microAppInstanceId");
const selectWechatGame = document.querySelector("#selectWechatGame");
const projectInventory = document.querySelector("#projectInventory");
const projectAudienceSource = document.querySelector("#projectAudienceSource");
const bidStrategyPreview = document.querySelector("#bidStrategyPreview");
const adInfoSummary = document.querySelector("#adInfoSummary");
const editAdInfo = document.querySelector("#editAdInfo");
const adInfoModal = document.querySelector("#adInfoModal");
const closeAdInfoModal = document.querySelector("#closeAdInfoModal");
const cancelAdInfoModal = document.querySelector("#cancelAdInfoModal");
const saveAdInfoConfig = document.querySelector("#saveAdInfoConfig");
const adIdentity = document.querySelector("#adIdentity");
const awemeSource = document.querySelector("#awemeSource");
const awemeMatchMode = document.querySelector("#awemeMatchMode");
const awemeAccountId = document.querySelector("#awemeAccountId");
const awemeAccountName = document.querySelector("#awemeAccountName");
const selectAwemeAccount = document.querySelector("#selectAwemeAccount");
const callToActionButtons = document.querySelector("#callToActionButtons");
const adProductName = document.querySelector("#adProductName");
const adSellingPoint = document.querySelector("#adSellingPoint");
const adSource = document.querySelector("#adSource");
const commentDisable = document.querySelector("#commentDisable");
const promotionName = document.querySelector("#promotionName");
const promotionStatus = document.querySelector("#promotionStatus");
const promotionRandomSuffix = document.querySelector("#promotionRandomSuffix");
const editCreative = document.querySelector("#editCreative");
const creativeModal = document.querySelector("#creativeModal");
const closeCreativeModal = document.querySelector("#closeCreativeModal");
const cancelCreativeModal = document.querySelector("#cancelCreativeModal");
const saveCreativeConfig = document.querySelector("#saveCreativeConfig");
const clearCreative = document.querySelector("#clearCreative");
const creativeCount = document.querySelector("#creativeCount");
const creativeSummary = document.querySelector("#creativeSummary");
const creativeEstimate = document.querySelector("#creativeEstimate");
const dynamicCreativeSwitch = document.querySelector("#dynamicCreativeSwitch");
const videoHpVisibility = document.querySelector("#videoHpVisibility");
const creativeGroupCount = document.querySelector("#creativeGroupCount");
const videoCount = document.querySelector("#videoCount");
const imageCount = document.querySelector("#imageCount");
const titleCount = document.querySelector("#titleCount");
const creativeGroupName = document.querySelector("#creativeGroupName");
const videoIds = document.querySelector("#videoIds");
const videoCoverIds = document.querySelector("#videoCoverIds");
const chooseVideoFiles = document.querySelector("#chooseVideoFiles");
const chooseVideoFolder = document.querySelector("#chooseVideoFolder");
const localVideoFilesInput = document.querySelector("#localVideoFiles");
const localVideoFolderInput = document.querySelector("#localVideoFolder");
const localVideoList = document.querySelector("#localVideoList");
const localVideoStatus = document.querySelector("#localVideoStatus");
const randomLocalVideos = document.querySelector("#randomLocalVideos");
const clearLocalVideos = document.querySelector("#clearLocalVideos");
const editTitlePack = document.querySelector("#editTitlePack");
const titlePackModal = document.querySelector("#titlePackModal");
const closeTitlePackModal = document.querySelector("#closeTitlePackModal");
const cancelTitlePackModal = document.querySelector("#cancelTitlePackModal");
const saveTitlePackConfig = document.querySelector("#saveTitlePackConfig");
const clearTitlePack = document.querySelector("#clearTitlePack");
const shuffleTitlePack = document.querySelector("#shuffleTitlePack");
const titlePackCount = document.querySelector("#titlePackCount");
const titlePackSummary = document.querySelector("#titlePackSummary");
const titlePackEstimate = document.querySelector("#titlePackEstimate");
const titleSource = document.querySelector("#titleSource");
const titleDistribution = document.querySelector("#titleDistribution");
const titlePerPromotion = document.querySelector("#titlePerPromotion");
const titlePackName = document.querySelector("#titlePackName");
const titleSearchKeyword = document.querySelector("#titleSearchKeyword");
const titleAccountScope = document.querySelector("#titleAccountScope");
const titlePackTitles = document.querySelector("#titlePackTitles");
const titlePackWordLists = document.querySelector("#titlePackWordLists");
const editLanding = document.querySelector("#editLanding");
const landingModal = document.querySelector("#landingModal");
const closeLandingModal = document.querySelector("#closeLandingModal");
const cancelLandingModal = document.querySelector("#cancelLandingModal");
const saveLandingConfig = document.querySelector("#saveLandingConfig");
const clearLanding = document.querySelector("#clearLanding");
const landingCount = document.querySelector("#landingCount");
const landingSummary = document.querySelector("#landingSummary");
const landingEstimate = document.querySelector("#landingEstimate");
const landingPerPromotion = document.querySelector("#landingPerPromotion");
const landingTypeSource = document.querySelector("#landingTypeSource");
const landingOnlyDeliverable = document.querySelector("#landingOnlyDeliverable");
const landingSearchKeyword = document.querySelector("#landingSearchKeyword");
const landingRefresh = document.querySelector("#landingRefresh");
const landingClearSearch = document.querySelector("#landingClearSearch");
const landingOpenOrange = document.querySelector("#landingOpenOrange");
const landingRows = document.querySelector("#landingRows");
const landingUrls = document.querySelector("#landingUrls");
const landingNames = document.querySelector("#landingNames");
const miniGameModal = document.querySelector("#miniGameModal");
const miniGameDialogTitle = document.querySelector("#miniGameDialogTitle");
const closeMiniGameModal = document.querySelector("#closeMiniGameModal");
const miniGameKeyword = document.querySelector("#miniGameKeyword");
const miniGameSearch = document.querySelector("#miniGameSearch");
const miniGameManage = document.querySelector("#miniGameManage");
const miniGameSort = document.querySelector("#miniGameSort");
const miniGameRows = document.querySelector("#miniGameRows");
const miniGamePageInfo = document.querySelector("#miniGamePageInfo");
const miniGameCurrentPage = document.querySelector("#miniGameCurrentPage");
const miniGamePrev = document.querySelector("#miniGamePrev");
const miniGameNext = document.querySelector("#miniGameNext");
const miniGamePageSize = document.querySelector("#miniGamePageSize");
const miniGameHelpText = document.querySelector("#miniGameHelpText");
const miniGameIconHead = document.querySelector("#miniGameIconHead");
const miniGameNameHead = document.querySelector("#miniGameNameHead");
const miniGameIdHead = document.querySelector("#miniGameIdHead");
const awemeModal = document.querySelector("#awemeModal");
const closeAwemeModal = document.querySelector("#closeAwemeModal");
const awemeKeyword = document.querySelector("#awemeKeyword");
const awemeSearch = document.querySelector("#awemeSearch");
const reloadAwemeAccounts = document.querySelector("#reloadAwemeAccounts");
const awemeRows = document.querySelector("#awemeRows");
const awemePageInfo = document.querySelector("#awemePageInfo");

const MAX_SELECTED_ADVERTISERS = 20;

let advertisers = [];
let selectedAdvertisers = [];
let miniGames = [];
let awemeAccounts = [];
let miniGamePage = 1;
let miniGameTotalPage = 1;
let projectConfig = {
  budget: 300,
  cpaBid: 1.34,
  projectName: "0421-高手来挪车-1-复制",
  projectStatus: "DISABLE",
  startDate: "2026-06-02",
  endDate: "2035-04-21",
  landingType: "MICRO_GAME",
  adType: "ALL",
  deliveryType: "NORMAL",
  deliveryMode: "PROCEDURAL",
  marketingGoal: "VIDEO_AND_IMAGE",
  relatedTask: "OFF",
  deliveryProduct: "WECHAT_GAME",
  externalAction: "AD_CONVERT_TYPE_GAME_ADDICTION",
  deepExternalAction: "",
  microMatchMode: "ACCOUNT",
  workbenchVersion: "OLD",
  microAppInstanceId: "1827014283265305",
  inventoryCatalog: "UNIVERSAL_SMART",
  audienceSource: "NONE",
  budgetConfigMode: "UNIFIED",
  scheduleType: "SCHEDULE_FROM_NOW",
  scheduleTimeMode: "ALL",
  bidStrategy: "CUSTOM",
  budgetMode: "BUDGET_MODE_DAY",
  pricing: "PRICING_OCPM",
  budgetOptimizeSwitch: "OFF",
  bidBudgetMode: "UNIFIED",
};

let adInfoConfig = {
  name: "0421-高手来挪车-3-动态-top-16-复制",
  status: "DISABLE",
  identity: "AWEME",
  awemeSource: "MANUAL",
  awemeMatchMode: "ALL",
  awemeId: "71565649449",
  awemeName: "",
  source: "高手来挪车",
  commentDisable: "OFF",
  callToActionButtons: ["开始游戏", "点击即玩"],
  productName: "高手来挪车",
  sellingPoints: ["无限下载，点击即玩"],
};

const defaultCreativeConfig = {
  groupCount: 1,
  videoCount: 3,
  imageCount: 0,
  titleCount: 0,
  groupName: "创意组01",
  dynamicCreativeSwitch: "ON",
  videoHpVisibility: "HIDE_VIDEO_ON_HP",
  videoIds: [
    "v02033g10000d02tps7og65pa4vcrck0",
    "v02033g10000d02tps7og65rslv6ln00",
    "v03033g10000d02tpsfog65guf364780",
  ],
  videoCoverIds: [
    "tos-cn-i-sd07hgqsbj/af2e62edb8d24c1798c0e8ae105b429c",
    "tos-cn-i-sd07hgqsbj/9a5b6de6c04c4be0bf5c8afa0ac3a769",
    "tos-cn-i-sd07hgqsbj/8cc21ddc37f146479dc7b3170447d6bb",
  ],
  titles: [],
  titleWordLists: ["4", "4", "4322", "5126", "5127"],
  externalUrls: [
    "https://www.chengzijianzhan.com/tetris/page/7483704561821810698/?projectid=__PROJECT_ID__&promotionid=__PROMOTION_ID__&creativetype=__CTYPE__&clickid=__CLICKID__&mid1=__MID1__&mid2=__MID2__&mid3=__MID3__&mid4=__MID4__&mid5=__MID5__",
    "https://www.chengzijianzhan.com/tetris/page/7483698627279175706/?projectid=__PROJECT_ID__&promotionid=__PROMOTION_ID__&creativetype=__CTYPE__&clickid=__CLICKID__&mid1=__MID1__&mid2=__MID2__&mid3=__MID3__&mid4=__MID4__&mid5=__MID5__",
    "https://www.chengzijianzhan.com/tetris/page/7483701366656466995/?projectid=__PROJECT_ID__&promotionid=__PROMOTION_ID__&creativetype=__CTYPE__&clickid=__CLICKID__&mid1=__MID1__&mid2=__MID2__&mid3=__MID3__&mid4=__MID4__&mid5=__MID5__",
  ],
  productImageIds: [
    "tos-cn-i-sd07hgqsbj/723915d512ab4be68a3169c0bbb8befd",
    "tos-cn-i-sd07hgqsbj/af012c8a07604e45b0d1268427bfbe0a",
    "tos-cn-i-sd07hgqsbj/8abc7b0d416e4467bc9e26ed8820e87a",
  ],
};

let creativeConfig = Object.assign({}, defaultCreativeConfig);
let localVideoPool = [];

const defaultTitlePackTitles = [
  "{地点}人爱的游戏，没wifi也能玩一整天！",
  "这么难！到底{地点}是谁在过关啊？",
  "闺蜜说我人菜瘾大？截图为证！今天必须锤进{省份}TOP10！",
  "{反性别-夫妻}说我人菜瘾大？截图为证！今天必须锤进排行榜TOP10！",
  "{月份}超火爆小游戏！玩了5分钟就入迷了,太刺激了！",
];

const defaultTitlePackConfig = {
  pickMode: "MANUAL",
  source: "TITLE_PACK",
  distribution: "REUSE",
  titlePerPromotion: 5,
  name: "高手来挪车标题包",
  keyword: "",
  accountScope: "ALL",
  titles: defaultTitlePackTitles.slice(),
  titleWordLists: defaultCreativeConfig.titleWordLists.slice(),
};

let titlePackConfig = Object.assign({}, defaultTitlePackConfig);

const defaultLandingConfig = {
  perPromotion: 1,
  type: "ORANGE",
  distribution: "SAME",
  onlyDeliverable: "ON",
  keyword: "",
  urls: defaultCreativeConfig.externalUrls.slice(),
  names: ["闯关奇才-3", "闯关奇才-1", "闯关奇才-2"],
  selectedUrls: defaultCreativeConfig.externalUrls.slice(),
};

let landingConfig = Object.assign({}, defaultLandingConfig);

try {
  const savedProjectConfig = localStorage.getItem("oceanengineProjectConfig");
  if (savedProjectConfig) {
    projectConfig = Object.assign(projectConfig, JSON.parse(savedProjectConfig));
  }
} catch (error) {
  console.warn("项目配置读取失败", error);
}
if (projectConfig.bidStrategy !== "NO_BID") {
  projectConfig.budgetOptimizeSwitch = "OFF";
}

try {
  const savedAdInfoConfig = localStorage.getItem("oceanengineAdInfoConfig");
  if (savedAdInfoConfig) {
    adInfoConfig = Object.assign(adInfoConfig, JSON.parse(savedAdInfoConfig));
  }
} catch (error) {
  console.warn("广告信息配置读取失败", error);
}
if (!Array.isArray(adInfoConfig.sellingPoints)) {
  adInfoConfig.sellingPoints = adInfoConfig.sellingPoint ? [adInfoConfig.sellingPoint] : [];
}
adInfoConfig.callToActionButtons = Array.isArray(adInfoConfig.callToActionButtons)
  ? adInfoConfig.callToActionButtons.slice(0, 10)
  : ["开始游戏", "点击即玩"];
adInfoConfig.sellingPoints = adInfoConfig.sellingPoints.slice(0, 10);

try {
  const savedCreativeConfig = localStorage.getItem("oceanengineCreativeConfig");
  if (savedCreativeConfig) {
    creativeConfig = Object.assign({}, defaultCreativeConfig, JSON.parse(savedCreativeConfig));
  }
} catch (error) {
  console.warn("创意素材配置读取失败", error);
}

try {
  const savedTitlePackConfig = localStorage.getItem("oceanengineTitlePackConfig");
  if (savedTitlePackConfig) {
    titlePackConfig = Object.assign({}, defaultTitlePackConfig, JSON.parse(savedTitlePackConfig));
  }
} catch (error) {
  console.warn("标题包配置读取失败", error);
}

try {
  const savedLandingConfig = localStorage.getItem("oceanengineLandingConfig");
  if (savedLandingConfig) {
    landingConfig = Object.assign({}, defaultLandingConfig, JSON.parse(savedLandingConfig));
  }
} catch (error) {
  console.warn("落地页配置读取失败", error);
}

function syncState() {
  const fallbackCount = account.value.trim().length > 0 ? 1 : 0;
  estimate.textContent = String(selectedAdvertisers.length || fallbackCount);
  budgetInput.value = projectConfig.budget;
  renderProjectSummary();
  renderCreativeSummary();
  renderTitlePackSummary();
  renderLandingSummary();
}

function statusText(value) {
  return value === "ENABLE" ? "开启" : "暂停";
}

function renderProjectSummary() {
  if (projectSummary) {
    projectSummary.innerHTML = `
      <strong>${escapeHtml(projectConfig.projectName)}</strong>
      <span>预算 ${escapeHtml(projectConfig.budget)} 元/日 · ${escapeHtml(statusText(projectConfig.projectStatus))}</span>
      <span>${escapeHtml(projectLandingTypeText(projectConfig.landingType))} · ${escapeHtml(deliveryProductText(projectConfig.deliveryProduct))} · ${escapeHtml(externalActionText(projectConfig.externalAction))}</span>
    `;
  }
  if (adInfoSummary) {
    adInfoSummary.innerHTML = `
      <p>广告名称：${escapeHtml(adInfoConfig.name)}</p>
      <p>产品名称：${escapeHtml(adInfoConfig.productName)}</p>
      <p>抖音号：${escapeHtml(adInfoConfig.awemeName || adInfoConfig.awemeId || "--")}</p>
      <p>行动号召：${escapeHtml((adInfoConfig.callToActionButtons || []).length)} 个 / 卖点：${escapeHtml((adInfoConfig.sellingPoints || []).length)} 个</p>
      <p>来源：${escapeHtml(adInfoConfig.source)}</p>
      <p>广告默认状态：${escapeHtml(statusText(adInfoConfig.status))}</p>
    `;
  }
}

function projectLandingTypeText(value) {
  const map = {
    MICRO_GAME: "小程序",
    APP: "应用推广",
    LEADS: "销售线索",
  };
  return map[value] || "小程序";
}

function deliveryProductText(value) {
  const map = {
    WECHAT_GAME: "微信小游戏",
    WECHAT_APP: "微信小程序",
    BYTE_GAME: "字节小游戏",
    BYTE_APP: "字节小程序",
    AWEME: "抖音号",
  };
  return map[value] || "微信小游戏";
}

function externalActionText(value) {
  const map = {
    AD_CONVERT_TYPE_GAME_ADDICTION: "关键行为",
    AD_CONVERT_TYPE_ACTIVE: "激活",
    AD_CONVERT_TYPE_PAY: "付费",
  };
  return map[value] || "关键行为";
}

function bidStrategyText(value) {
  return value === "NO_BID" ? "最大转化" : "稳定成本-常规版";
}

function renderCreativeSummary() {
  if (creativeCount) {
    creativeCount.textContent = `已选创意组：${creativeConfig.groupCount || 0}/500`;
  }
  if (!creativeSummary) return;

  const hasMaterials = (creativeConfig.videoIds && creativeConfig.videoIds.length) ||
    selectedLocalVideos().length;
  if (!hasMaterials) {
    creativeSummary.classList.add("empty-state");
    creativeSummary.classList.remove("material-summary");
    creativeSummary.innerHTML = `
      <div class="doc-icon" aria-hidden="true"><span></span></div>
      <p>暂无创意素材</p>
    `;
    return;
  }

  creativeSummary.classList.remove("empty-state");
  creativeSummary.classList.add("material-summary");
  const unitCount = Number(creativeConfig.groupCount || 1);
  const perUnitVideoCount = Number(creativeConfig.videoCount || selectedLocalVideos().length || (creativeConfig.videoIds || []).length || 0);
  creativeSummary.innerHTML = `
    <strong>${escapeHtml(creativeConfig.groupName || "创意组01")}</strong>
    <p>视频 ${escapeHtml(selectedLocalVideos().length || (creativeConfig.videoIds || []).length)} 个</p>
    <p>本地视频 ${escapeHtml(selectedLocalVideos().length)} 个 / 手动视频 ID ${escapeHtml((creativeConfig.videoIds || []).length)} 个</p>
    <p>动态创意：${escapeHtml(creativeConfig.dynamicCreativeSwitch === "OFF" ? "不启用" : "启用")}</p>
  `;
}

function renderTitlePackSummary() {
  const count = (titlePackConfig.titles || []).length;
  if (titlePackCount) {
    titlePackCount.textContent = `已选：${count}/200`;
  }
  if (!titlePackSummary) return;

  if (!count) {
    titlePackSummary.classList.remove("material-summary");
    titlePackSummary.classList.add("empty-text");
    titlePackSummary.textContent = "暂无";
    return;
  }

  titlePackSummary.classList.remove("empty-text");
  titlePackSummary.classList.add("material-summary", "compact-summary");
  const preview = (titlePackConfig.titles || []).slice(0, 3).map((item) => `<p>${escapeHtml(item)}</p>`).join("");
  titlePackSummary.innerHTML = `
    <strong>${escapeHtml(titlePackConfig.name || "标题包")}</strong>
    <p>${escapeHtml(titlePackSourceText(titlePackConfig.source))} · ${escapeHtml(titleDistributionText(titlePackConfig.distribution))}</p>
    ${preview}
  `;
}

function titlePackSourceText(value) {
  if (value === "TITLE_LIBRARY") return "标题库";
  if (value === "MATERIAL_NAME") return "素材名作为标题";
  return "标题包";
}

function titleDistributionText(value) {
  if (value === "AVERAGE") return "平均分配";
  if (value === "BY_ACCOUNT") return "分账户选择";
  return "全账户复用";
}

function renderLandingSummary() {
  const count = (landingConfig.urls || []).length;
  if (landingCount) {
    landingCount.textContent = `已选：${count}/${landingConfig.perPromotion || 1}`;
  }
  if (!landingSummary) return;

  if (!count) {
    landingSummary.classList.remove("material-summary");
    landingSummary.classList.add("empty-text");
    landingSummary.textContent = "暂无";
    return;
  }

  landingSummary.classList.remove("empty-text");
  landingSummary.classList.add("material-summary", "compact-summary");
  const firstName = (landingConfig.names || [])[0] || "落地页";
  landingSummary.innerHTML = `
    <strong>${escapeHtml(firstName)}</strong>
    <p>${escapeHtml(landingAssetTypeText(landingConfig.type))} · ${escapeHtml(landingDistributionText(landingConfig.distribution))}</p>
    <p>${escapeHtml((landingConfig.urls || [])[0])}</p>
  `;
}

function landingAssetTypeText(value) {
  const map = {
    ORANGE: "橙子落地页",
    ORANGE_TEMPLATE: "橙子建站模板",
    CL_TEMPLATE: "创量落地页模板",
    THIRD_PARTY: "第三方落地页",
    DYNAMIC_LINK: "动态链接生成",
    MANUAL: "手动填写",
    PRODUCT_LIBRARY: "商品库链接",
  };
  return map[value] || "橙子落地页";
}

function landingDistributionText(value) {
  const map = {
    SAME: "全部相同",
    ACCOUNT: "按账户分配",
    PROJECT: "按项目分配",
    PROMOTION: "按广告分配",
  };
  return map[value] || "全部相同";
}

function landingSelectionLimit() {
  const perPromotion = Math.max(1, Number(landingPerPromotion && landingPerPromotion.value || landingConfig.perPromotion || 1));
  const distribution = getRadioValue("landingDistribution") || landingConfig.distribution || "SAME";
  if (distribution === "PROMOTION") {
    return perPromotion * Math.max(1, Number(creativeConfig.groupCount || 1));
  }
  if (distribution === "ACCOUNT" || distribution === "PROJECT") {
    return perPromotion * Math.max(1, selectedAdvertisers.length || 1);
  }
  return perPromotion;
}

function updateLandingEstimate() {
  if (!landingEstimate) return;
  const selectedCount = Array.isArray(landingConfig.selectedUrls) ? landingConfig.selectedUrls.length : 0;
  landingEstimate.textContent = `已选：${selectedCount}/${landingSelectionLimit()}`;
}

function setResultLoading() {
  const accountCount = selectedAdvertisers.length || 1;
  resultPanel.classList.add("has-result");
  resultPanel.innerHTML = `
    <h2>正在创建</h2>
    <div class="result-card">
      <div><span>执行步骤</span><strong>创建项目 → 暂停项目 → 创建单元 → 暂停单元</strong></div>
      <div><span>媒体账户</span><strong>${accountCount} 个</strong></div>
      <div><span>预算</span><strong>${budgetInput.value || 300} 元/日</strong></div>
      <div><span>状态</span><strong>请求中...</strong></div>
    </div>
  `;
}

function setResultSuccess(data) {
  resultPanel.classList.add("has-result");
  if (data && Array.isArray(data.results)) {
    const rows = data.results.map((item) => {
      const ok = item.code === 0;
      const note = ok ? (item.projectName || "--") : (item.message || "--");
      return `
        <tr>
          <td>${escapeHtml(item.advertiserId)}</td>
          <td>${ok ? "成功" : "失败"}</td>
          <td>${escapeHtml(item.projectId || "--")}</td>
          <td>${escapeHtml(item.promotionId || "--")}</td>
          <td title="${escapeHtml(note)}">${escapeHtml(note)}</td>
        </tr>
      `;
    }).join("");
    const title = data.failureCount
      ? (data.successCount ? "批量创建完成（部分失败）" : "批量创建失败")
      : "批量创建成功";
    resultPanel.innerHTML = `
      <h2>${title}</h2>
      <div class="result-card">
        <div><span>总账号</span><strong>${escapeHtml(data.total || data.results.length)}</strong></div>
        <div><span>成功</span><strong>${escapeHtml(data.successCount || 0)}</strong></div>
        <div><span>失败</span><strong>${escapeHtml(data.failureCount || 0)}</strong></div>
        <div><span>预算</span><strong>${escapeHtml(data.budget || projectConfig.budget)} 元/日</strong></div>
      </div>
      <table class="batch-result-table">
        <thead>
          <tr>
            <th>广告主 ID</th>
            <th>结果</th>
            <th>项目 ID</th>
            <th>单元 ID</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
    return;
  }
  resultPanel.innerHTML = `
    <h2>创建成功</h2>
    <div class="result-card">
      <div><span>项目 ID</span><strong>${data.projectId}</strong></div>
      <div><span>项目名称</span><strong>${data.projectName}</strong></div>
      <div><span>项目状态</span><strong>${data.projectStatus}</strong></div>
      <div><span>广告单元 ID</span><strong>${data.promotionId}</strong></div>
      <div><span>广告单元名称</span><strong>${data.promotionName}</strong></div>
      <div><span>广告单元状态</span><strong>${data.promotionStatus}</strong></div>
      <div><span>预算</span><strong>${data.budget} 元/日</strong></div>
    </div>
  `;
}

function setResultError(message) {
  resultPanel.classList.add("has-result");
  resultPanel.innerHTML = `
    <h2>创建失败</h2>
    <div class="result-card">
      <div><span>错误信息</span><strong class="error-text">${message}</strong></div>
    </div>
  `;
}

async function createOne() {
  if (!location.protocol.startsWith("http")) {
    setResultError("请通过 http://localhost:5173 打开页面，file:// 无法调用本地接口。");
    return;
  }

  const budget = Number(budgetInput.value || 300);
  if (!Number.isFinite(budget) || budget < 300) {
    setResultError("项目预算最低为 300 元/日。");
    return;
  }
  if (!selectedAdvertisers.length) {
    setResultError("请先选择至少 1 个媒体账户，最多可同时选择 20 个。");
    return;
  }
  projectConfig.budget = budget;

  const projectNameForCreate = projectRandomSuffix.checked
    ? `${projectConfig.projectName}-${Date.now().toString().slice(-4)}`
    : projectConfig.projectName;
  const promotionNameForCreate = promotionRandomSuffix.checked
    ? `${adInfoConfig.name}-${Date.now().toString().slice(-4)}`
    : adInfoConfig.name;

  createButton.disabled = true;
  createButton.textContent = "创建中...";
  setResultLoading();

  try {
    const localVideos = selectedLocalVideos();
    const payload = {
      budget: projectConfig.budget,
      cpaBid: projectConfig.cpaBid,
      projectName: projectNameForCreate,
      projectStatus: projectConfig.projectStatus,
      startDate: projectConfig.startDate,
      endDate: projectConfig.endDate,
      projectContent: {
        landingType: projectConfig.landingType,
        adType: projectConfig.adType,
        deliveryType: projectConfig.deliveryType,
        deliveryMode: projectConfig.deliveryMode,
        marketingGoal: projectConfig.marketingGoal,
        relatedTask: projectConfig.relatedTask,
        deliveryProduct: projectConfig.deliveryProduct,
        externalAction: projectConfig.externalAction,
        deepExternalAction: projectConfig.deepExternalAction,
        microMatchMode: projectConfig.microMatchMode,
        workbenchVersion: projectConfig.workbenchVersion,
        microAppInstanceId: projectConfig.microAppInstanceId,
        inventoryCatalog: projectConfig.inventoryCatalog,
        audienceSource: projectConfig.audienceSource,
        budgetConfigMode: projectConfig.budgetConfigMode,
        scheduleType: projectConfig.scheduleType,
        scheduleTimeMode: projectConfig.scheduleTimeMode,
        bidStrategy: projectConfig.bidStrategy,
        budgetMode: projectConfig.budgetMode,
        pricing: projectConfig.pricing,
        budgetOptimizeSwitch: projectConfig.budgetOptimizeSwitch,
        bidBudgetMode: projectConfig.bidBudgetMode,
      },
      promotion: Object.assign({}, adInfoConfig, {
        name: promotionNameForCreate,
      }),
      creative: Object.assign({}, creativeConfig, {
        videoSource: localVideos.length ? "LOCAL_UPLOAD" : "MANUAL_ID",
      }),
      titlePack: titlePackConfig,
      landing: landingConfig,
      nameSuffix: projectRandomSuffix.checked ? undefined : "复制",
      advertiserIds: selectedAdvertisers.map((item) => item.advertiser_id),
    };

    let response;
    if (localVideos.length) {
      const formData = new FormData();
      formData.append("payload", JSON.stringify(payload));
      localVideos.forEach((file) => formData.append("localVideos", file, file.name));
      response = await fetch("/api/clone-one", {
        method: "POST",
        body: formData,
      });
    } else {
      response = await fetch("/api/clone-one", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "接口返回异常");
    }
    setResultSuccess(result.data);
  } catch (error) {
    setResultError(error.message);
  } finally {
    createButton.disabled = false;
    createButton.textContent = "执行创建";
  }
}

account.addEventListener("input", syncState);
createButton.addEventListener("click", createOne);
syncState();

async function loadOceanengineConfig() {
  if (!location.protocol.startsWith("http")) return;

  try {
    const response = await fetch("/api/config");
    const config = await response.json();
    account.placeholder = `广告主 ${config.advertiserId}`;
    ruleText.title = `样例项目 ID：${config.sourceProjectId}`;
  } catch (error) {
    console.warn("配置读取失败", error);
  }
}

loadOceanengineConfig();

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeAdvertiser(item) {
  return {
    advertiser_id: String(item.advertiser_id || item.account_id || ""),
    advertiser_name: item.advertiser_name || item.account_name || "--",
    company_name: item.company_name || item.company || item.parent_organization_name || (item.company_list && item.company_list[0]) || "--",
    role: item.account_role || item.account_type || item.advertiser_role || "--",
    create_project: item.create_project || "--",
    is_valid: item.is_valid !== false,
  };
}

function filteredAdvertisers() {
  const keyword = accountSearch.value.trim().toLowerCase();
  if (!keyword) return advertisers;
  return advertisers.filter((item) => {
    return item.advertiser_id.toLowerCase().includes(keyword) ||
      item.advertiser_name.toLowerCase().includes(keyword) ||
      item.company_name.toLowerCase().includes(keyword);
  });
}

function primarySelectedAdvertiser() {
  return selectedAdvertisers[0] || null;
}

function isAdvertiserSelected(advertiserId) {
  return selectedAdvertisers.some((item) => item.advertiser_id === advertiserId);
}

function toggleAdvertiserSelection(advertiser) {
  if (!advertiser) return;
  const index = selectedAdvertisers.findIndex((item) => item.advertiser_id === advertiser.advertiser_id);
  if (index >= 0) {
    selectedAdvertisers.splice(index, 1);
    return;
  }
  if (selectedAdvertisers.length >= MAX_SELECTED_ADVERTISERS) {
    alert(`最多可同时选择 ${MAX_SELECTED_ADVERTISERS} 个媒体账户`);
    return;
  }
  selectedAdvertisers.push(advertiser);
}

function renderSelectedAccount() {
  selectedAccountCount.textContent = String(selectedAdvertisers.length);
  if (!selectedAdvertisers.length) {
    selectedAccountName.textContent = "暂无";
  } else {
    selectedAccountName.innerHTML = selectedAdvertisers.map((item) => `
      <span class="selected-account-item">${escapeHtml(item.advertiser_name)} / ${escapeHtml(item.advertiser_id)}</span>
    `).join("");
  }
  confirmAccount.classList.toggle("is-ready", Boolean(selectedAdvertisers.length));
}

function renderAdvertisers() {
  const list = filteredAdvertisers();
  accountPageInfo.textContent = `共 ${list.length} 条`;
  if (!list.length) {
    accountRows.innerHTML = `<tr><td colspan="6" class="table-empty">暂无可选媒体账户</td></tr>`;
    renderSelectedAccount();
    return;
  }

  accountRows.innerHTML = list.map((item) => {
    const selected = isAdvertiserSelected(item.advertiser_id);
    return `
      <tr class="${selected ? "is-selected" : ""}" data-advertiser-id="${escapeHtml(item.advertiser_id)}">
        <td><input type="checkbox" ${selected ? "checked" : ""} aria-label="选择媒体账户"></td>
        <td>
          <strong>${escapeHtml(item.advertiser_name)}</strong>
          <span class="sub-id">ID：${escapeHtml(item.advertiser_id)}</span>
        </td>
        <td>${escapeHtml(item.company_name)}</td>
        <td>--</td>
        <td>${escapeHtml(item.role)}</td>
        <td>${escapeHtml(item.create_project)}</td>
      </tr>
    `;
  }).join("");
  renderSelectedAccount();
}

async function loadAdvertisers() {
  accountRows.innerHTML = `<tr><td colspan="6" class="table-empty">加载中...</td></tr>`;
  accountWarning.textContent = "";
  try {
    const response = await fetch("/api/advertisers");
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "账号列表加载失败");
    }
    if (result.warnings && result.warnings.length) {
      accountWarning.textContent = `子账号列表权限不足：请重新授权并勾选 ${result.warnings[0].api}`;
    }
    const selectedIds = new Set(selectedAdvertisers.map((item) => item.advertiser_id));
    advertisers = (result.data && result.data.list ? result.data.list : []).map(normalizeAdvertiser);
    selectedAdvertisers = Array.from(selectedIds)
      .map((advertiserId) => advertisers.find((item) => item.advertiser_id === advertiserId))
      .filter(Boolean)
      .slice(0, MAX_SELECTED_ADVERTISERS);
    if (!selectedAdvertisers.length && advertisers.length === 1) {
      selectedAdvertisers = [advertisers[0]];
    }
    renderAdvertisers();
  } catch (error) {
    accountRows.innerHTML = `<tr><td colspan="6" class="table-empty">${escapeHtml(error.message)}</td></tr>`;
  }
}

function openAccountModal(event) {
  event.preventDefault();
  accountModal.classList.add("is-open");
  accountModal.setAttribute("aria-hidden", "false");
  loadAdvertisers();
}

function closeModal() {
  accountModal.classList.remove("is-open");
  accountModal.setAttribute("aria-hidden", "true");
}

function confirmSelectedAccount() {
  if (!selectedAdvertisers.length) return;
  if (selectedAdvertisers.length === 1) {
    account.value = `广告主 ${selectedAdvertisers[0].advertiser_id}`;
  } else {
    account.value = `已选 ${selectedAdvertisers.length} 个媒体账户`;
  }
  account.title = selectedAdvertisers
    .map((item) => `${item.advertiser_name} / ${item.advertiser_id}`)
    .join("\n");
  syncState();
  closeModal();
}

function openProjectModal() {
  projectBudget.value = projectConfig.budget;
  projectCpaBid.value = projectConfig.cpaBid;
  projectName.value = projectConfig.projectName;
  projectStatus.value = projectConfig.projectStatus;
  projectStartDate.value = projectConfig.startDate;
  projectEndDate.value = projectConfig.endDate;
  setRadioValue("landingType", projectConfig.landingType || "MICRO_GAME");
  projectAdType.value = projectConfig.adType || "ALL";
  projectDeliveryType.value = projectConfig.deliveryType || "NORMAL";
  projectDeliveryMode.value = projectConfig.deliveryMode || "PROCEDURAL";
  projectMarketingGoal.value = projectConfig.marketingGoal || "VIDEO_AND_IMAGE";
  setRadioValue("relatedTask", projectConfig.relatedTask || "OFF");
  setRadioValue("deliveryProduct", projectConfig.deliveryProduct || "WECHAT_GAME");
  setRadioValue("microMatchMode", projectConfig.microMatchMode || "ACCOUNT");
  setRadioValue("workbenchVersion", projectConfig.workbenchVersion || "OLD");
  setRadioValue("budgetConfigMode", projectConfig.budgetConfigMode || "UNIFIED");
  setRadioValue("scheduleType", projectConfig.scheduleType || "SCHEDULE_FROM_NOW");
  setRadioValue("scheduleTimeMode", projectConfig.scheduleTimeMode || "ALL");
  setRadioValue("bidStrategy", projectConfig.bidStrategy || "CUSTOM");
  setRadioValue("budgetMode", projectConfig.budgetMode || "BUDGET_MODE_DAY");
  setRadioValue("pricing", projectConfig.pricing || "PRICING_OCPM");
  setRadioValue("budgetOptimizeSwitch", projectConfig.budgetOptimizeSwitch || "OFF");
  setRadioValue("bidBudgetMode", projectConfig.bidBudgetMode || "UNIFIED");
  updateBidStrategyPreview();
  projectExternalAction.value = projectConfig.externalAction || "AD_CONVERT_TYPE_GAME_ADDICTION";
  projectDeepExternalAction.value = projectConfig.deepExternalAction || "";
  microAppInstanceId.value = projectConfig.microAppInstanceId || "1827014283265305";
  projectInventory.value = projectConfig.inventoryCatalog || "UNIVERSAL_SMART";
  projectAudienceSource.value = projectConfig.audienceSource || "NONE";
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
}

function closeProjectDialog() {
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
}

function saveProjectDialog() {
  const budget = Number(projectBudget.value || 300);
  const cpaBid = Number(projectCpaBid.value || 1.34);
  if (!Number.isFinite(budget) || budget < 300) {
    alert("项目预算最低为 300 元/日");
    return;
  }
  if (!Number.isFinite(cpaBid) || cpaBid <= 0) {
    alert("出价必须大于 0");
    return;
  }
  projectConfig = {
    budget,
    cpaBid,
    projectName: projectName.value.trim() || "0421-高手来挪车-1-复制",
    projectStatus: projectStatus.value,
    startDate: projectStartDate.value || "2026-06-02",
    endDate: projectEndDate.value || "2035-04-21",
    landingType: getRadioValue("landingType") || "MICRO_GAME",
    adType: projectAdType.value || "ALL",
    deliveryType: projectDeliveryType.value || "NORMAL",
    deliveryMode: projectDeliveryMode.value || "PROCEDURAL",
    marketingGoal: projectMarketingGoal.value || "VIDEO_AND_IMAGE",
    relatedTask: getRadioValue("relatedTask") || "OFF",
    deliveryProduct: getRadioValue("deliveryProduct") || "WECHAT_GAME",
    externalAction: projectExternalAction.value || "AD_CONVERT_TYPE_GAME_ADDICTION",
    deepExternalAction: projectDeepExternalAction.value || "",
    microMatchMode: getRadioValue("microMatchMode") || "ACCOUNT",
    workbenchVersion: getRadioValue("workbenchVersion") || "OLD",
    microAppInstanceId: microAppInstanceId.value.trim() || "1827014283265305",
    inventoryCatalog: projectInventory.value || "UNIVERSAL_SMART",
    audienceSource: projectAudienceSource.value || "NONE",
    budgetConfigMode: getRadioValue("budgetConfigMode") || "UNIFIED",
    scheduleType: getRadioValue("scheduleType") || "SCHEDULE_FROM_NOW",
    scheduleTimeMode: getRadioValue("scheduleTimeMode") || "ALL",
    bidStrategy: getRadioValue("bidStrategy") || "CUSTOM",
    budgetMode: getRadioValue("budgetMode") || "BUDGET_MODE_DAY",
    pricing: getRadioValue("pricing") || "PRICING_OCPM",
    budgetOptimizeSwitch: getRadioValue("budgetOptimizeSwitch") || "OFF",
    bidBudgetMode: getRadioValue("bidBudgetMode") || "UNIFIED",
  };
  localStorage.setItem("oceanengineProjectConfig", JSON.stringify(projectConfig));
  budgetInput.value = projectConfig.budget;
  renderProjectSummary();
  closeProjectDialog();
}

function currentMiniGameType() {
  return getRadioValue("deliveryProduct") === "BYTE_GAME" ? "BYTE_GAME" : "WECHAT_GAME";
}

function miniGameTypeText(type) {
  return type === "BYTE_GAME" ? "抖音小游戏" : "微信小游戏";
}

function updateMiniGameHeaders() {
  const type = currentMiniGameType();
  const text = miniGameTypeText(type);
  miniGameDialogTitle.textContent = text;
  miniGameHelpText.textContent = `当前可以参与投放的${text}`;
  miniGameIconHead.textContent = text;
  miniGameNameHead.textContent = `${text}名称`;
  miniGameIdHead.textContent = `${text}资产ID`;
  selectWechatGame.textContent = `选择${text}`;
}

function renderMiniGames(errorMessage) {
  if (errorMessage) {
    miniGameRows.innerHTML = `<tr><td colspan="4" class="table-empty">${escapeHtml(errorMessage)}</td></tr>`;
    miniGamePageInfo.textContent = "共 0 条记录";
    miniGameCurrentPage.textContent = String(miniGamePage);
    return;
  }
  if (!miniGames.length) {
    miniGameRows.innerHTML = `<tr><td colspan="4" class="table-empty">暂无可用小游戏</td></tr>`;
    miniGamePageInfo.textContent = "共 0 条记录";
    miniGameCurrentPage.textContent = String(miniGamePage);
    return;
  }
  miniGameRows.innerHTML = miniGames.map((item) => `
    <tr data-instance-id="${escapeHtml(item.instance_id)}">
      <td>
        <div class="mini-game-icon-cell">
          ${item.icon_url ? `<img src="${escapeHtml(item.icon_url)}" alt="">` : `<span>${escapeHtml(item.name.slice(0, 1))}</span>`}
        </div>
      </td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.instance_id)}</td>
      <td><button class="clear-button use-mini-game" type="button">使用</button></td>
    </tr>
  `).join("");
  miniGameCurrentPage.textContent = String(miniGamePage);
}

async function loadMiniGames() {
  if (!location.protocol.startsWith("http")) {
    renderMiniGames("请通过 http://localhost:5173 打开页面后再查询小游戏。");
    return;
  }
  const advertiser = primarySelectedAdvertiser();
  const advertiserId = advertiser ? advertiser.advertiser_id : "";
  if (!advertiserId) {
    renderMiniGames("请先选择媒体账户，再查询该账户有权限的小游戏。");
    return;
  }

  miniGameRows.innerHTML = `<tr><td colspan="4" class="table-empty">加载中...</td></tr>`;
  try {
    const params = new URLSearchParams({
      advertiser_id: advertiserId,
      product_type: currentMiniGameType(),
      keyword: miniGameKeyword.value.trim(),
      page: String(miniGamePage),
      page_size: miniGamePageSize.value,
    });
    const response = await fetch(`/api/mini-games?${params.toString()}`);
    const result = await response.json();
    if (!response.ok || (result.code !== 0 && result.code !== 207)) {
      throw new Error(result.message || "小游戏列表加载失败");
    }
    const data = result.data || {};
    miniGames = data.list || [];
    const pageInfo = data.page_info || {};
    miniGameTotalPage = Number(pageInfo.total_page || 1);
    miniGamePageInfo.textContent = `共 ${Number(pageInfo.total_number || miniGames.length)} 条记录`;
    renderMiniGames();
    if (result.errors && result.errors.length && !miniGames.length) {
      renderMiniGames(result.errors.map((item) => `${item.apiPath}: ${item.message || item.code}`).join("；"));
    }
  } catch (error) {
    renderMiniGames(error.message);
  }
}

function openMiniGameModal() {
  updateMiniGameHeaders();
  miniGamePage = 1;
  miniGameModal.classList.add("is-open");
  miniGameModal.setAttribute("aria-hidden", "false");
  loadMiniGames();
}

function closeMiniGameDialog() {
  miniGameModal.classList.remove("is-open");
  miniGameModal.setAttribute("aria-hidden", "true");
}

function useMiniGame(instanceId) {
  const item = miniGames.find((game) => game.instance_id === instanceId);
  if (!item) return;
  microAppInstanceId.value = item.instance_id;
  projectConfig.microAppInstanceId = item.instance_id;
  projectConfig.deliveryProduct = item.product_type;
  setRadioValue("deliveryProduct", item.product_type);
  updateMiniGameHeaders();
  localStorage.setItem("oceanengineProjectConfig", JSON.stringify(Object.assign({}, projectConfig, {
    microAppInstanceId: item.instance_id,
    deliveryProduct: item.product_type,
  })));
  renderProjectSummary();
  closeMiniGameDialog();
}

function getRadioValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : "";
}

function setRadioValue(name, value) {
  document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.checked = input.value === value;
    input.closest("label").classList.toggle("is-selected", input.checked);
  });
}

function updateBidStrategyPreview() {
  const strategy = getRadioValue("bidStrategy") || projectConfig.bidStrategy || "CUSTOM";
  const supportsBudgetOptimize = strategy === "NO_BID";
  if (bidStrategyPreview) {
    bidStrategyPreview.textContent = bidStrategyText(strategy);
  }
  if (projectCpaBid) {
    projectCpaBid.disabled = strategy === "NO_BID";
  }
  if (!supportsBudgetOptimize) {
    setRadioValue("budgetOptimizeSwitch", "OFF");
  }
  document.querySelectorAll('input[name="budgetOptimizeSwitch"]').forEach((input) => {
    input.disabled = !supportsBudgetOptimize;
    input.closest("label").classList.toggle("is-disabled", !supportsBudgetOptimize);
  });
}

function openAdInfoModal() {
  adIdentity.value = adInfoConfig.identity || "AWEME";
  awemeSource.value = adInfoConfig.awemeSource || "MANUAL";
  awemeMatchMode.value = adInfoConfig.awemeMatchMode || "ALL";
  awemeAccountId.value = adInfoConfig.awemeId || "";
  awemeAccountName.value = adInfoConfig.awemeName || "";
  callToActionButtons.value = (adInfoConfig.callToActionButtons || []).join("\n");
  adProductName.value = adInfoConfig.productName;
  adSellingPoint.value = (adInfoConfig.sellingPoints || []).join("\n");
  adSource.value = adInfoConfig.source;
  commentDisable.value = adInfoConfig.commentDisable;
  promotionName.value = adInfoConfig.name;
  promotionStatus.value = adInfoConfig.status;
  adInfoModal.classList.add("is-open");
  adInfoModal.setAttribute("aria-hidden", "false");
}

function closeAdInfoDialog() {
  adInfoModal.classList.remove("is-open");
  adInfoModal.setAttribute("aria-hidden", "true");
}

function saveAdInfoDialog() {
  const buttons = splitLimitedList(callToActionButtons.value, 10);
  const sellingPoints = splitLimitedList(adSellingPoint.value, 10);
  adInfoConfig = {
    name: promotionName.value.trim() || "0421-高手来挪车-3-动态-top-16-复制",
    status: promotionStatus.value,
    identity: adIdentity.value,
    awemeSource: awemeSource.value,
    awemeMatchMode: awemeMatchMode.value,
    awemeId: awemeAccountId.value.trim(),
    awemeName: awemeAccountName.value.trim(),
    source: adSource.value.trim() || "高手来挪车",
    commentDisable: commentDisable.value,
    callToActionButtons: buttons.length ? buttons : ["开始游戏", "点击即玩"],
    productName: adProductName.value.trim() || "高手来挪车",
    sellingPoints: sellingPoints.length ? sellingPoints : ["无限下载，点击即玩"],
  };
  localStorage.setItem("oceanengineAdInfoConfig", JSON.stringify(adInfoConfig));
  renderProjectSummary();
  closeAdInfoDialog();
}

function linesFromTextarea(element) {
  return element.value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
}

function splitLimitedList(value, limit) {
  return String(value || "")
    .split(/[\r\n,，]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, limit);
}

function normalizeAwemeAccount(item) {
  const id = item.aweme_id || item.awemeId || item.id || item.uid || item.open_id || item.account_id;
  return {
    id: id == null ? "" : String(id),
    name: item.aweme_name || item.awemeName || item.nickname || item.name || item.account_name || "--",
    status: item.status || item.auth_status || item.aweme_status || item.audit_status || "--",
    raw: item,
  };
}

function filteredAwemeAccounts() {
  const keyword = awemeKeyword.value.trim().toLowerCase();
  if (!keyword) return awemeAccounts;
  return awemeAccounts.filter((item) => (
    item.name.toLowerCase().includes(keyword) ||
    item.id.toLowerCase().includes(keyword)
  ));
}

function renderAwemeAccounts(errorMessage) {
  if (errorMessage) {
    awemeRows.innerHTML = `<tr><td colspan="4" class="table-empty">${escapeHtml(errorMessage)}</td></tr>`;
    awemePageInfo.textContent = "共 0 条记录";
    return;
  }

  const list = filteredAwemeAccounts();
  awemePageInfo.textContent = `共 ${list.length} 条记录`;
  if (!list.length) {
    awemeRows.innerHTML = `<tr><td colspan="4" class="table-empty">当前媒体账户未返回授权抖音号，可手动填写抖音号 ID。</td></tr>`;
    return;
  }

  awemeRows.innerHTML = list.map((item) => `
    <tr>
      <td><strong>${escapeHtml(item.name)}</strong></td>
      <td>${escapeHtml(item.id)}</td>
      <td>${escapeHtml(item.status)}</td>
      <td><button class="link-button" data-aweme-id="${escapeHtml(item.id)}" type="button">使用</button></td>
    </tr>
  `).join("");
}

async function loadAwemeAccounts() {
  const advertiser = primarySelectedAdvertiser();
  if (!advertiser) {
    renderAwemeAccounts("请先选择媒体账户，再选择抖音号。");
    return;
  }

  awemeRows.innerHTML = `<tr><td colspan="4" class="table-empty">加载中...</td></tr>`;
  try {
    const params = new URLSearchParams({
      advertiser_id: advertiser.advertiser_id,
      page: "1",
      page_size: "100",
    });
    const response = await fetch(`/api/aweme-accounts?${params.toString()}`);
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "抖音号列表加载失败");
    }
    awemeAccounts = (result.data && result.data.list ? result.data.list : []).map(normalizeAwemeAccount).filter((item) => item.id);
    renderAwemeAccounts();
  } catch (error) {
    awemeAccounts = [];
    renderAwemeAccounts(error.message);
  }
}

function openAwemeModal() {
  awemeModal.classList.add("is-open");
  awemeModal.setAttribute("aria-hidden", "false");
  loadAwemeAccounts();
}

function closeAwemeDialog() {
  awemeModal.classList.remove("is-open");
  awemeModal.setAttribute("aria-hidden", "true");
}

function useAwemeAccount(id) {
  const item = awemeAccounts.find((accountItem) => accountItem.id === id);
  if (!item) return;
  awemeAccountId.value = item.id;
  awemeAccountName.value = item.name;
  adIdentity.value = "AWEME";
  awemeSource.value = "MANUAL";
  closeAwemeDialog();
}

function isVideoFile(file) {
  return file && (file.type.startsWith("video/") || /\.(mp4|mov|m4v|avi|wmv|flv|mkv|webm)$/i.test(file.name));
}

function addLocalVideoFiles(fileList) {
  const existing = new Set(localVideoPool.map((item) => `${item.file.name}:${item.file.size}:${item.file.lastModified}`));
  Array.from(fileList || []).forEach((file) => {
    if (!isVideoFile(file)) return;
    const key = `${file.name}:${file.size}:${file.lastModified}`;
    if (existing.has(key)) return;
    existing.add(key);
    localVideoPool.push({
      id: key,
      file,
      selected: true,
      path: file.webkitRelativePath || file.name,
    });
  });
  renderLocalVideoPool();
  renderCreativeSummary();
}

function selectedLocalVideos() {
  return localVideoPool.filter((item) => item.selected).map((item) => item.file);
}

function formatFileSize(size) {
  if (!Number.isFinite(size)) return "--";
  if (size >= 1024 * 1024 * 1024) return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
  if (size >= 1024 * 1024) return `${(size / 1024 / 1024).toFixed(1)} MB`;
  if (size >= 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${size} B`;
}

function renderLocalVideoPool() {
  if (!localVideoList || !localVideoStatus) return;
  const selectedCount = localVideoPool.filter((item) => item.selected).length;
  localVideoStatus.textContent = localVideoPool.length
    ? `已导入 ${localVideoPool.length} 个视频，已选择 ${selectedCount} 个；执行创建时上传到所选广告主账户。`
    : "未选择本地视频，默认使用下方视频 ID 或样例视频。";

  if (!localVideoPool.length) {
    localVideoList.innerHTML = `<div class="local-video-empty">可选择多个视频，或选择整个文件夹后随机抽取。</div>`;
    return;
  }

  localVideoList.innerHTML = localVideoPool.map((item) => `
    <label class="local-video-row">
      <input type="checkbox" data-local-video-id="${escapeHtml(item.id)}" ${item.selected ? "checked" : ""}>
      <span>${escapeHtml(item.path)}</span>
      <small>${escapeHtml(formatFileSize(item.file.size))}</small>
    </label>
  `).join("");
}

function randomPickLocalVideos(event) {
  event.preventDefault();
  if (!localVideoPool.length) return;
  const unitCount = Math.max(1, Number(creativeGroupCount.value || 1));
  const perUnitCount = Math.max(1, Number(videoCount.value || 1));
  const desired = Math.max(1, Math.min(localVideoPool.length, unitCount * perUnitCount));
  const shuffled = localVideoPool
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((entry) => entry.item);
  const selectedIds = new Set(shuffled.slice(0, desired).map((item) => item.id));
  localVideoPool = localVideoPool.map((item) => ({
    ...item,
    selected: selectedIds.has(item.id),
  }));
  renderLocalVideoPool();
  renderCreativeSummary();
}

function clearLocalVideoPool(event) {
  event.preventDefault();
  localVideoPool = [];
  if (localVideoFilesInput) localVideoFilesInput.value = "";
  if (localVideoFolderInput) localVideoFolderInput.value = "";
  renderLocalVideoPool();
  renderCreativeSummary();
}

function openCreativeModal() {
  dynamicCreativeSwitch.value = creativeConfig.dynamicCreativeSwitch || "ON";
  videoHpVisibility.value = creativeConfig.videoHpVisibility || "HIDE_VIDEO_ON_HP";
  creativeGroupCount.value = creativeConfig.groupCount || 1;
  videoCount.value = creativeConfig.videoCount || (creativeConfig.videoIds || []).length || 1;
  imageCount.value = creativeConfig.imageCount || 0;
  titleCount.value = creativeConfig.titleCount || 0;
  creativeGroupName.value = creativeConfig.groupName || "创意组01";
  videoIds.value = (creativeConfig.videoIds || []).join("\n");
  videoCoverIds.value = (creativeConfig.videoCoverIds || []).join("\n");
  creativeEstimate.textContent = `已选创意组：${creativeConfig.groupCount || 1}/500`;
  renderLocalVideoPool();
  creativeModal.classList.add("is-open");
  creativeModal.setAttribute("aria-hidden", "false");
}

function closeCreativeDialog() {
  creativeModal.classList.remove("is-open");
  creativeModal.setAttribute("aria-hidden", "true");
}

function saveCreativeDialog() {
  const groupCount = Number(creativeGroupCount.value || 1);
  if (!Number.isFinite(groupCount) || groupCount < 1 || groupCount > 500) {
    alert("创意组数量必须在 1-500 之间");
    return;
  }

  const perUnitVideoCount = Number(videoCount.value || 0);
  if (!Number.isFinite(perUnitVideoCount) || perUnitVideoCount < 0 || perUnitVideoCount > 30) {
    alert("视频数量必须在 0-30 之间");
    return;
  }

  const next = {
    groupCount,
    videoCount: perUnitVideoCount,
    imageCount: Number(imageCount.value || 0),
    titleCount: Number(titleCount.value || 0),
    groupName: creativeGroupName.value.trim() || "创意组01",
    dynamicCreativeSwitch: dynamicCreativeSwitch.value,
    videoHpVisibility: videoHpVisibility.value,
    videoIds: linesFromTextarea(videoIds),
    videoCoverIds: selectedLocalVideos().length ? [] : linesFromTextarea(videoCoverIds),
    localVideoNames: selectedLocalVideos().map((file) => file.name),
    titles: [],
    titleWordLists: [],
    externalUrls: [],
    productImageIds: [],
  };

  creativeConfig = Object.assign({}, defaultCreativeConfig, next);
  localStorage.setItem("oceanengineCreativeConfig", JSON.stringify(creativeConfig));
  renderCreativeSummary();
  closeCreativeDialog();
}

function clearCreativeConfig(event) {
  event.preventDefault();
  creativeConfig = {
    groupCount: 0,
    videoCount: 0,
    imageCount: 0,
    titleCount: 0,
    groupName: "",
    dynamicCreativeSwitch: "ON",
    videoHpVisibility: "HIDE_VIDEO_ON_HP",
    videoIds: [],
    videoCoverIds: [],
    localVideoNames: [],
    titles: [],
    titleWordLists: [],
    externalUrls: [],
    productImageIds: [],
  };
  localVideoPool = [];
  localStorage.setItem("oceanengineCreativeConfig", JSON.stringify(creativeConfig));
  renderCreativeSummary();
}

function selectedTitlePickMode() {
  const checked = document.querySelector('input[name="titlePickMode"]:checked');
  return checked ? checked.value : "MANUAL";
}

function setTitlePickMode(value) {
  document.querySelectorAll('input[name="titlePickMode"]').forEach((input) => {
    input.checked = input.value === value;
    input.closest(".purpose-card").classList.toggle("is-selected", input.checked);
  });
}

function openTitlePackModal() {
  setTitlePickMode(titlePackConfig.pickMode || "MANUAL");
  titleSource.value = titlePackConfig.source || "TITLE_PACK";
  titleDistribution.value = titlePackConfig.distribution || "REUSE";
  titlePerPromotion.value = titlePackConfig.titlePerPromotion || 5;
  titlePackName.value = titlePackConfig.name || "高手来挪车标题包";
  titleSearchKeyword.value = titlePackConfig.keyword || "";
  titleAccountScope.value = titlePackConfig.accountScope || "ALL";
  titlePackTitles.value = (titlePackConfig.titles || []).join("\n");
  titlePackWordLists.value = (titlePackConfig.titleWordLists || []).join("\n");
  titlePackEstimate.textContent = `已选：${(titlePackConfig.titles || []).length}/200`;
  titlePackModal.classList.add("is-open");
  titlePackModal.setAttribute("aria-hidden", "false");
}

function closeTitlePackDialog() {
  titlePackModal.classList.remove("is-open");
  titlePackModal.setAttribute("aria-hidden", "true");
}

function saveTitlePackDialog() {
  const titles = linesFromTextarea(titlePackTitles).slice(0, 200);
  const perPromotion = Number(titlePerPromotion.value || 5);
  if (!Number.isFinite(perPromotion) || perPromotion < 1 || perPromotion > 200) {
    alert("每条广告标题数必须在 1-200 之间");
    return;
  }

  titlePackConfig = {
    pickMode: selectedTitlePickMode(),
    source: titleSource.value,
    distribution: titleDistribution.value,
    titlePerPromotion: perPromotion,
    name: titlePackName.value.trim() || "高手来挪车标题包",
    keyword: titleSearchKeyword.value.trim(),
    accountScope: titleAccountScope.value,
    titles,
    titleWordLists: linesFromTextarea(titlePackWordLists).slice(0, 200),
  };
  localStorage.setItem("oceanengineTitlePackConfig", JSON.stringify(titlePackConfig));
  renderTitlePackSummary();
  closeTitlePackDialog();
}

function clearTitlePackConfig(event) {
  event.preventDefault();
  titlePackConfig = Object.assign({}, defaultTitlePackConfig, {
    titles: [],
    titleWordLists: [],
  });
  localStorage.setItem("oceanengineTitlePackConfig", JSON.stringify(titlePackConfig));
  renderTitlePackSummary();
}

function shuffleTitlePackConfig(event) {
  event.preventDefault();
  const pairs = (titlePackConfig.titles || []).map((title, index) => ({
    title,
    wordList: (titlePackConfig.titleWordLists || [])[index] || "",
  }));
  for (let index = pairs.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [pairs[index], pairs[randomIndex]] = [pairs[randomIndex], pairs[index]];
  }
  titlePackConfig = Object.assign({}, titlePackConfig, {
    titles: pairs.map((item) => item.title),
    titleWordLists: pairs.map((item) => item.wordList),
  });
  localStorage.setItem("oceanengineTitlePackConfig", JSON.stringify(titlePackConfig));
  renderTitlePackSummary();
}

function selectedLandingItems() {
  return (landingConfig.urls || []).map((url, index) => ({
    url,
    name: (landingConfig.names || [])[index] || `落地页-${index + 1}`,
    id: (landingConfig.ids || [])[index] || String(index + 1059),
    selected: !Array.isArray(landingConfig.selectedUrls) || landingConfig.selectedUrls.includes(url),
  }));
}

function renderLandingRows() {
  const keyword = (landingSearchKeyword.value || "").trim().toLowerCase();
  const items = selectedLandingItems().filter((item) => {
    if (!keyword) return true;
    return item.name.toLowerCase().includes(keyword) || item.url.toLowerCase().includes(keyword);
  });
  if (!items.length) {
    landingRows.innerHTML = `<tr><td colspan="5" class="table-empty">暂无可选落地页</td></tr>`;
    return;
  }
  landingRows.innerHTML = items.map((item, index) => `
    <tr data-landing-index="${index}">
      <td><input type="checkbox" data-landing-url="${escapeHtml(item.url)}" ${item.selected ? "checked" : ""}></td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.id || String(index + 1059))}</td>
      <td>1</td>
      <td><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">预览</a></td>
    </tr>
  `).join("");
}

async function loadLandingPages(event) {
  if (event) event.preventDefault();
  if (!location.protocol.startsWith("http")) return;
  const advertiser = primarySelectedAdvertiser();
  const currentExternalAction = projectExternalAction && projectExternalAction.value
    ? projectExternalAction.value
    : projectConfig.externalAction || "";
  const currentMicroAppInstanceId = microAppInstanceId && microAppInstanceId.value
    ? microAppInstanceId.value.trim()
    : projectConfig.microAppInstanceId || "";
  const params = new URLSearchParams({
    advertiser_id: advertiser ? advertiser.advertiser_id : "",
    external_action: currentExternalAction,
    micro_app_instance_id: currentMicroAppInstanceId,
    current_time: new Date().toISOString(),
    keyword: landingSearchKeyword.value.trim(),
    page: "1",
    page_size: "100",
  });
  landingRows.innerHTML = `<tr><td colspan="5" class="table-empty">加载中...</td></tr>`;
  try {
    const response = await fetch(`/api/landing-pages?${params.toString()}`);
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "落地页列表获取失败");
    }
    const list = result.data && Array.isArray(result.data.list) ? result.data.list : [];
    if (!list.length) {
      landingRows.innerHTML = `<tr><td colspan="5" class="table-empty">账号内暂无可选落地页</td></tr>`;
      return;
    }
    landingConfig.ids = list.map((item) => item.id);
    landingConfig.urls = list.map((item) => item.url);
    landingConfig.names = list.map((item) => item.name);
    landingConfig.selectedUrls = list.slice(0, landingSelectionLimit()).map((item) => item.url);
    landingUrls.value = landingConfig.urls.join("\n");
    landingNames.value = landingConfig.names.join("\n");
    renderLandingRows();
    updateLandingEstimate();
  } catch (error) {
    landingRows.innerHTML = `<tr><td colspan="5" class="table-empty">${escapeHtml(error.message)}</td></tr>`;
  }
}

function openLandingModal() {
  if (!Array.isArray(landingConfig.selectedUrls)) {
    landingConfig.selectedUrls = (landingConfig.urls || []).slice();
  }
  landingPerPromotion.value = landingConfig.perPromotion || 1;
  landingTypeSource.value = landingConfig.type || "ORANGE";
  landingOnlyDeliverable.value = landingConfig.onlyDeliverable || "ON";
  landingSearchKeyword.value = landingConfig.keyword || "";
  setRadioValue("landingDistribution", landingConfig.distribution || "SAME");
  landingUrls.value = (landingConfig.urls || []).join("\n");
  landingNames.value = (landingConfig.names || []).join("\n");
  landingEstimate.textContent = `已选：${(landingConfig.selectedUrls || []).length}/${landingConfig.perPromotion || 1}`;
  renderLandingRows();
  updateLandingEstimate();
  landingModal.classList.add("is-open");
  landingModal.setAttribute("aria-hidden", "false");
  loadLandingPages();
}

function closeLandingDialog() {
  landingModal.classList.remove("is-open");
  landingModal.setAttribute("aria-hidden", "true");
}

function saveLandingDialog() {
  const urls = linesFromTextarea(landingUrls);
  const names = linesFromTextarea(landingNames);
  const selectedUrlSet = new Set(Array.isArray(landingConfig.selectedUrls) ? landingConfig.selectedUrls : urls);
  const selectedUrls = urls.filter((url) => selectedUrlSet.has(url));
  const selectedNames = urls
    .map((url, index) => ({ url, name: names[index] }))
    .filter((item) => selectedUrlSet.has(item.url))
    .map((item) => item.name)
    .filter(Boolean);
  const perPromotion = Number(landingPerPromotion.value || 1);
  if (!Number.isFinite(perPromotion) || perPromotion < 1 || perPromotion > 20) {
    alert("每个广告配置的落地页数量必须在 1-20 之间");
    return;
  }

  const limit = landingSelectionLimit();
  if (selectedUrls.length > limit) {
    alert(`最多只能选择 ${limit} 个落地页`);
    return;
  }

  landingConfig = {
    perPromotion,
    type: landingTypeSource.value,
    distribution: getRadioValue("landingDistribution") || "SAME",
    onlyDeliverable: landingOnlyDeliverable.value,
    keyword: landingSearchKeyword.value.trim(),
    ids: (landingConfig.ids || []).filter((id, index) => (selectedUrls.length ? selectedUrls : urls).includes(urls[index])),
    urls: selectedUrls.length ? selectedUrls : urls,
    names: selectedNames.length ? selectedNames : names,
    selectedUrls: selectedUrls.length ? selectedUrls : urls,
  };
  localStorage.setItem("oceanengineLandingConfig", JSON.stringify(landingConfig));
  renderLandingSummary();
  closeLandingDialog();
}

function clearLandingConfig(event) {
  event.preventDefault();
  landingConfig = Object.assign({}, defaultLandingConfig, {
    urls: [],
    names: [],
    selectedUrls: [],
  });
  localStorage.setItem("oceanengineLandingConfig", JSON.stringify(landingConfig));
  renderLandingSummary();
}

changeAccount.addEventListener("click", openAccountModal);
closeAccountModal.addEventListener("click", closeModal);
cancelAccountModal.addEventListener("click", closeModal);
reloadAccounts.addEventListener("click", renderAdvertisers);
accountSearch.addEventListener("input", renderAdvertisers);
clearAccountSearch.addEventListener("click", () => {
  accountSearch.value = "";
  renderAdvertisers();
});
clearSelectedAccount.addEventListener("click", () => {
  selectedAdvertisers = [];
  renderAdvertisers();
});
confirmAccount.addEventListener("click", confirmSelectedAccount);
accountRows.addEventListener("click", (event) => {
  const row = event.target.closest("tr[data-advertiser-id]");
  if (!row) return;
  const advertiser = advertisers.find((item) => item.advertiser_id === row.dataset.advertiserId);
  toggleAdvertiserSelection(advertiser);
  renderAdvertisers();
});

editProject.addEventListener("click", openProjectModal);
closeProjectModal.addEventListener("click", closeProjectDialog);
cancelProjectModal.addEventListener("click", closeProjectDialog);
saveProjectConfig.addEventListener("click", saveProjectDialog);
editAdInfo.addEventListener("click", openAdInfoModal);
closeAdInfoModal.addEventListener("click", closeAdInfoDialog);
cancelAdInfoModal.addEventListener("click", closeAdInfoDialog);
saveAdInfoConfig.addEventListener("click", saveAdInfoDialog);
selectAwemeAccount.addEventListener("click", openAwemeModal);
closeAwemeModal.addEventListener("click", closeAwemeDialog);
reloadAwemeAccounts.addEventListener("click", loadAwemeAccounts);
awemeSearch.addEventListener("click", renderAwemeAccounts);
awemeKeyword.addEventListener("input", renderAwemeAccounts);
awemeRows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-aweme-id]");
  if (!button) return;
  useAwemeAccount(button.dataset.awemeId);
});
editCreative.addEventListener("click", openCreativeModal);
closeCreativeModal.addEventListener("click", closeCreativeDialog);
cancelCreativeModal.addEventListener("click", closeCreativeDialog);
saveCreativeConfig.addEventListener("click", saveCreativeDialog);
clearCreative.addEventListener("click", clearCreativeConfig);
chooseVideoFiles.addEventListener("click", () => localVideoFilesInput.click());
chooseVideoFolder.addEventListener("click", () => localVideoFolderInput.click());
localVideoFilesInput.addEventListener("change", () => addLocalVideoFiles(localVideoFilesInput.files));
localVideoFolderInput.addEventListener("change", () => addLocalVideoFiles(localVideoFolderInput.files));
randomLocalVideos.addEventListener("click", randomPickLocalVideos);
clearLocalVideos.addEventListener("click", clearLocalVideoPool);
localVideoList.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[data-local-video-id]');
  if (!checkbox) return;
  localVideoPool = localVideoPool.map((item) => (
    item.id === checkbox.dataset.localVideoId
      ? { ...item, selected: checkbox.checked }
      : item
  ));
  renderLocalVideoPool();
  renderCreativeSummary();
});
editTitlePack.addEventListener("click", openTitlePackModal);
closeTitlePackModal.addEventListener("click", closeTitlePackDialog);
cancelTitlePackModal.addEventListener("click", closeTitlePackDialog);
saveTitlePackConfig.addEventListener("click", saveTitlePackDialog);
clearTitlePack.addEventListener("click", clearTitlePackConfig);
shuffleTitlePack.addEventListener("click", shuffleTitlePackConfig);
editLanding.addEventListener("click", openLandingModal);
closeLandingModal.addEventListener("click", closeLandingDialog);
cancelLandingModal.addEventListener("click", closeLandingDialog);
saveLandingConfig.addEventListener("click", saveLandingDialog);
clearLanding.addEventListener("click", clearLandingConfig);
landingRefresh.addEventListener("click", loadLandingPages);
landingSearchKeyword.addEventListener("input", renderLandingRows);
landingPerPromotion.addEventListener("input", updateLandingEstimate);
document.querySelectorAll('input[name="landingDistribution"]').forEach((input) => {
  input.addEventListener("change", updateLandingEstimate);
});
landingClearSearch.addEventListener("click", () => {
  landingSearchKeyword.value = "";
  renderLandingRows();
});
landingRows.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[data-landing-url]');
  if (!checkbox) return;
  const selected = new Set(Array.isArray(landingConfig.selectedUrls) ? landingConfig.selectedUrls : (landingConfig.urls || []));
  if (checkbox.checked) {
    const limit = landingSelectionLimit();
    if (selected.size >= limit) {
      checkbox.checked = false;
      alert(`最多只能选择 ${limit} 个落地页`);
      return;
    }
    selected.add(checkbox.dataset.landingUrl);
  } else {
    selected.delete(checkbox.dataset.landingUrl);
  }
  landingConfig.selectedUrls = Array.from(selected);
  updateLandingEstimate();
  landingEstimate.textContent = `已选：${landingConfig.selectedUrls.length}/${landingConfig.perPromotion || 1}`;
  updateLandingEstimate();
});
landingOpenOrange.addEventListener("click", () => {
  alert("当前先使用已填写的落地页链接创建。后续可继续接入橙子建站/落地页资产列表接口。");
});
selectWechatGame.addEventListener("click", openMiniGameModal);
closeMiniGameModal.addEventListener("click", closeMiniGameDialog);
miniGameSearch.addEventListener("click", () => {
  miniGamePage = 1;
  loadMiniGames();
});
miniGameKeyword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    miniGamePage = 1;
    loadMiniGames();
  }
});
miniGamePageSize.addEventListener("change", () => {
  miniGamePage = 1;
  loadMiniGames();
});
miniGamePrev.addEventListener("click", () => {
  if (miniGamePage <= 1) return;
  miniGamePage -= 1;
  loadMiniGames();
});
miniGameNext.addEventListener("click", () => {
  if (miniGamePage >= miniGameTotalPage) return;
  miniGamePage += 1;
  loadMiniGames();
});
miniGameManage.addEventListener("click", () => {
  alert("管理小游戏需要跳转巨量/资产后台，当前先在本地选择已有权限的小游戏。");
});
miniGameSort.addEventListener("change", () => {
  miniGames = miniGames.slice().reverse();
  renderMiniGames();
});
miniGameRows.addEventListener("click", (event) => {
  const button = event.target.closest(".use-mini-game");
  if (!button) return;
  const row = event.target.closest("tr[data-instance-id]");
  if (!row) return;
  useMiniGame(row.dataset.instanceId);
});

document.querySelectorAll('input[name="titlePickMode"]').forEach((input) => {
  input.addEventListener("change", () => setTitlePickMode(input.value));
});

["relatedTask", "deliveryProduct", "microMatchMode", "workbenchVersion", "budgetConfigMode", "scheduleType", "scheduleTimeMode", "bidStrategy", "budgetMode", "pricing", "budgetOptimizeSwitch", "bidBudgetMode", "landingDistribution"].forEach((name) => {
  document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.addEventListener("change", () => {
      setRadioValue(name, input.value);
      if (name === "bidStrategy") updateBidStrategyPreview();
      if (name === "deliveryProduct") updateMiniGameHeaders();
    });
  });
});

updateMiniGameHeaders();

document.querySelectorAll('input[name="landingType"]').forEach((input) => {
  const card = input.closest(".purpose-card");
  card.addEventListener("click", () => {
    document.querySelectorAll('input[name="landingType"]').forEach((item) => {
      item.closest(".purpose-card").classList.remove("is-selected");
    });
    card.classList.add("is-selected");
  });
});
