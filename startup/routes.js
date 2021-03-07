const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const home = require("../routes/home");

module.exports = (app) => {
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/", home);
};
