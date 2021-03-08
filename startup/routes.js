const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const home = require("../routes/home");
const categories = require("../routes/categories");
const questions = require("../routes/questions");

module.exports = (app) => {
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/", home);
  app.use("/api/categories", categories);
  app.use("/api/questions", questions);
};
