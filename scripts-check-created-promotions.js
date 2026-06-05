const fs = require("fs");
const https = require("https");

const env = {};
fs.readFileSync(".env", "utf8")
  .split(/\r?\n/)
  .filter((line) => line.includes("="))
  .forEach((line) => {
    const index = line.indexOf("=");
    env[line.slice(0, index)] = line.slice(index + 1);
  });

const filtering = JSON.stringify({ project_ids: ["7646712450741567507"] });
const query = new URLSearchParams({
  advertiser_id: env.OCEANENGINE_ADVERTISER_ID,
  filtering,
  page: "1",
  page_size: "20",
});

https.get({
  hostname: "api.oceanengine.com",
  path: `/open_api/v3.0/promotion/list/?${query.toString()}`,
  headers: { "Access-Token": env.OCEANENGINE_ACCESS_TOKEN },
}, (response) => {
  let body = "";
  response.on("data", (chunk) => {
    body += chunk;
  });
  response.on("end", () => {
    fs.writeFileSync("data/created-promotions-check.json", body, "utf8");
    const data = JSON.parse(body);
    console.log("code", data.code, data.message);
    const list = data.data && data.data.list ? data.data.list : [];
    list.forEach((item) => {
      console.log(item.promotion_id, item.promotion_name, item.opt_status, item.status_first);
    });
  });
}).on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});
