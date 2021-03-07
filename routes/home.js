const express = require("express");
const Response = require("../models/response");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(new Response("OK", null, "Hello, World!"));
});

module.exports = router;
