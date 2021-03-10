const config = require("config");
const Response = require("../models/response");
const apiKey = config.get("apiKey");

module.exports = (req, res, next) => {
  const key = req.header("API-Key");
  if (!key)
    return res
      .status(401)
      .send(
        new Response(
          "Unauthorized",
          "Access denied. No API Key provided.",
          null
        )
      );

  if (!apiKey.includes(key))
    return res
      .status(400)
      .send(new Response("Bad Request", "Invalid API Key.", null));

  next();
};
