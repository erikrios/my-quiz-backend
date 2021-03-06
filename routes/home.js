const express = require("express");
const config = require("config");
const Response = require("../models/response");
const auth = require("../middleware/auth");
const router = express.Router();
const message = config.get("message");

router.get("/", auth, (req, res) => {
  res.send(new Response("OK", null, message));
});

module.exports = router;
