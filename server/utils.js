function getApiOptions(url, path) {
  const date =
    new Date()
      .toISOString()
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 15) + "Z";
  const opts = {
    hostname: "api.golfbert.com",
    uri: url,
    path: path,
    service: "execute-api",
    headers: {
      "X-Amz-Date": date,
      "x-api-key": "IqhN5gyUxf9jJvTO9WlvH91gObbeoyU86Sd9JQNY",
      "content-type": "application/x-www-form-urlencoded",
    },
  };

  return opts;
}

module.exports = { getApiOptions };
