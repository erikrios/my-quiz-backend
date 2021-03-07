const express = require("express");
const Joi = require("joi");
const Response = require("../models/response");
const db = require("../db/models/index");

const router = express.Router();
const Category = db.Category;

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send(new Response("BAD REQUEST", error.message, null));

  const { name } = req.body;

  try {
    const category = await Category.create({ name });
    res.send(new Response("OK", null, category));
  } catch (e) {
    res
      .status(500)
      .send(new Response("INTERNAL SERVER ERROR", e.message, null));
  }
});

const validate = (body) => {
  const schema = Joi.object({ name: Joi.string().min(2).max(30).required() });
  return schema.validate(body);
};

module.exports = router;
