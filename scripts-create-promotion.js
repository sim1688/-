const fs = require("fs");
const https = require("https");

function readEnv() {
  const env = {};
  fs.readFileSync(".env", "utf8")
    .split(/\r?\n/)
    .filter((line) => line.includes("="))
    .forEach((line) => {
      const index = line.indexOf("=");
      env[line.slice(0, index)] = line.slice(index + 1);
    });
  return env;
}

function clean(value) {
  if (value === null || value === undefined || value === "") return undefined;
  if (Array.isArray(value)) {
    const items = value.map(clean).filter((item) => item !== undefined);
    return items.length ? items : undefined;
  }
  if (typeof value === "object") {
    const object = {};
    Object.keys(value).forEach((key) => {
      const cleaned = clean(value[key]);
      if (cleaned !== undefined) object[key] = cleaned;
    });
    return Object.keys(object).length ? object : undefined;
  }
  return value;
}

function post(path, body, outputFile) {
  return new Promise((resolve, reject) => {
    const env = readEnv();
    const request = https.request({
      hostname: "api.oceanengine.com",
      path,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
        "Access-Token": env.OCEANENGINE_ACCESS_TOKEN,
      },
    }, (response) => {
      let output = "";
      response.on("data", (chunk) => {
        output += chunk;
      });
      response.on("end", () => {
        if (outputFile) fs.writeFileSync(outputFile, output, "utf8");
        console.log("status", response.statusCode);
        console.log(output.slice(0, 3000));
        resolve(output);
      });
    });

    request.on("error", reject);
    request.write(body);
    request.end();
  });
}

async function main() {
  const env = readEnv();
  const source = JSON.parse(fs.readFileSync("data/source-promotions.json", "utf8")).data.list[0];

  const materials = clean(source.promotion_materials);
  if (materials && materials.video_material_list) {
    materials.video_material_list = materials.video_material_list.map((item) => clean({
      image_mode: item.image_mode,
      video_id: item.video_id,
      video_cover_id: item.video_cover_id,
      video_hp_visibility: item.video_hp_visibility,
    }));
  }
  if (materials && materials.title_material_list) {
    materials.title_material_list = materials.title_material_list.map((item) => clean({
      title: item.title,
      word_list: item.word_list,
    }));
  }

  const payload = clean({
    advertiser_id: Number(env.OCEANENGINE_ADVERTISER_ID),
    project_id: "__PROJECT_ID__",
    name: `${source.promotion_name}-复制`,
    opt_status: "DISABLE",
    is_comment_disable: source.is_comment_disable,
    ad_download_status: source.ad_download_status,
    native_setting: source.native_setting,
    promotion_materials: materials,
    schedule_time: source.schedule_time,
    source: source.source,
    star_auto_delivery_switch: source.star_auto_delivery_switch,
  });

  const body = JSON.stringify(payload, null, 2)
    .replace('"__PROJECT_ID__"', "7646712450741567507");
  fs.writeFileSync("data/create-promotion-request.json", body, "utf8");
  await post("/open_api/v3.0/promotion/create/", body, "data/create-promotion-response.json");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
