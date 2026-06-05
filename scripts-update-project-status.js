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

const body = `{"advertiser_id":${env.OCEANENGINE_ADVERTISER_ID},"data":[{"project_id":7646712450741567507,"opt_status":"DISABLE"}]}`;
fs.writeFileSync("data/project-status-update-request.json", body, "utf8");

const request = https.request({
  hostname: "api.oceanengine.com",
  path: "/open_api/v3.0/project/status/update/",
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
    fs.writeFileSync("data/project-status-update-response.json", output, "utf8");
    console.log("status", response.statusCode);
    console.log(output.slice(0, 2000));
  });
});

request.on("error", (error) => {
  console.error(error.message);
  process.exit(1);
});

request.write(body);
request.end();
