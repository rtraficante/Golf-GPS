var https = require("https");
var aws4 = require("aws4");
require("./secrets");

function request(opts) {
  https
    .request(opts, function (res) {
      res.pipe(process.stdout);
    })
    .end(opts.body || "");
}

const opts = {
  hostname: "api.golfbert.com",
  path: "/v1/courses/4803/",
  service: "execute-api",
  headers: {
    "X-Amz-Date": "20220624T202439Z",
    "x-api-key": "IqhN5gyUxf9jJvTO9WlvH91gObbeoyU86Sd9JQNY",
    "content-type": "application/x-www-form-urlencoded",
  },
};

aws4.sign(opts, {
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

request(opts);
console.log(opts);
