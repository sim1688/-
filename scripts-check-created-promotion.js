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

const filtering = '{"ids":[7646714567464992819]}';
const query = new URLSearchParams({
  advertiser_id: env.OCEANENGINE_ADVERTISER_ID,
  filtering,
  page: "1",
  page_size: "10",
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
    fs.writeFileSync("data/created-promotion-check.json", body, "utf8");
    const data = JSON.parse(body);
    console.log("code", data.code, data.message);
    const item = data.data && data.data.list && data.data.list[0];
    if (item) {
      console.log("promotion_id", "7646714567464992819");
      console.log("promotion_name", item.promotion_name);
      console.log("project_id", item.project_id);
      console.log("opt_status", item.opt_status);
      console.log("status_first", item.status_first);
      console.log("status", item.status);
    }
  });
}).on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});
