const router = require("express").Router();
const request = require("request");
const aws4 = require("aws4");
const { getApiOptions } = require("../utils");
require("../../secrets");

router.get("/", (req, res) => {
  const opts = getApiOptions(
    `https://www.api.golfbert.com/v1/courses/`,
    `/v1/courses/`
  );

  aws4.sign(opts, {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  request(opts, (err, response, body) => {
    const data = JSON.parse(body);
    res.send(data);
  });
});

router.get("/:id", async (req, res) => {
  const opts = getApiOptions(
    `https://www.api.golfbert.com/v1/courses/${req.params.id}/`,
    `/v1/courses/${req.params.id}/`
  );

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
  const opts = getApiOptions(
    `https://www.api.golfbert.com/v1/courses/${req.params.id}/holes`,
    `/v1/courses/${req.params.id}/holes`
  );

  aws4.sign(opts, {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });

  request(opts, (err, response, body) => {
    const data = JSON.parse(body);
    res.send(data);
  });
});

router.get("/:id/scorecard", (req, res) => {
  const opts = getApiOptions(
    `https://www.api.golfbert.com/v1/courses/${req.params.id}/scorecard`,
    `/v1/courses/${req.params.id}/scorecard`
  );

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
