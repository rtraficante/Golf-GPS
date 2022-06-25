const router = require("express").Router();
const request = require("request");
const aws4 = require("aws4");
require("../../secrets");

router.get('/', (req, res) => {
  const date =
    new Date()
      .toISOString()
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 15) + "Z";
  const opts = {
    hostname: "api.golfbert.com",
    uri: `https://www.api.golfbert.com/v1/courses/`,
    path: `/v1/courses/`,
    service: "execute-api",
    headers: {
      "X-Amz-Date": date,
      "x-api-key": "IqhN5gyUxf9jJvTO9WlvH91gObbeoyU86Sd9JQNY",
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  aws4.sign(opts, {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  request(opts, (err, response, body) => {
    const data = JSON.parse(body);
    res.send(data);
  });
})

router.get("/:id", async (req, res) => {
  const date =
    new Date()
      .toISOString()
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 15) + "Z";
  const opts = {
    hostname: "api.golfbert.com",
    uri: `https://www.api.golfbert.com/v1/courses/${req.params.id}/`,
    path: `/v1/courses/${req.params.id}/`,
    service: "execute-api",
    headers: {
      "X-Amz-Date": date,
      "x-api-key": "IqhN5gyUxf9jJvTO9WlvH91gObbeoyU86Sd9JQNY",
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  aws4.sign(opts, {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  request(opts, (err, response, body) => {
    const data = JSON.parse(body);
    res.send(data);
  });
});

router.get("/:id/holes", (req, res) => {
  const date =
    new Date()
      .toISOString()
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 15) + "Z";
  const opts = {
    hostname: "api.golfbert.com",
    uri: `https://www.api.golfbert.com/v1/courses/${req.params.id}/holes`,
    path: `/v1/courses/${req.params.id}/holes`,
    service: "execute-api",
    headers: {
      "X-Amz-Date": date,
      "x-api-key": "IqhN5gyUxf9jJvTO9WlvH91gObbeoyU86Sd9JQNY",
      "content-type": "application/x-www-form-urlencoded",
    },
  };
  ("20220624T232924948Z");

  aws4.sign(opts, {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  request(opts, (err, response, body) => {
    const data = JSON.parse(body);
    res.send(data);
  });
});

module.exports = router;
