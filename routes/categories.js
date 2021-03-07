const express = require("express");
const Joi = require("joi");
const Response = require("../models/response");
const Category = require("../db/models/category");

const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send(new Response("Bad Request", error.message, null));

  const { name } = req.body;

  try {
    const category = await Category.create({ name });
    res.send(new Response("OK", null, category));
  } catch (e) {
    res
      .status(500)
      .send(new Response("Internal Server Error", e.message, null));
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const category = await Category.findByPk(id);
    if (!category)
      return res
        .status(404)
        .send(
          new Response("Not Found", `Category with id ${id} not found.`, null)
        );

    res.send(new Response("OK", null, category));
  } catch (e) {
    res
      .status(500)
      .send(new Response("Internal Server Error", e.message, null));
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();

    res.send(new Response("OK", null, categories));
  } catch (e) {
    res
      .status(500)
      .send(new Response("Internal Server Error", e.message, null));
  }
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send(new Response("Bad Request", error.message, null));

  const id = req.params.id;
  const { name } = req.body;

  try {
    const [affectedRows] = await Category.update(
      { name },
      {
        where: { id },
      }
    );

    if (!affectedRows)
      return res
        .status(404)
        .send(
          new Response("Not Found", `Category with id ${id} not found.`, null)
        );

    res.send(new Response("OK", null, { id: parseInt(id), name }));
  } catch (e) {
    res
      .status(500)
      .send(new Response("Internal Server Error", e.message, null));
  }
});

const validate = (body) => {
  const schema = Joi.object({ name: Joi.string().min(2).max(30).required() });
  return schema.validate(body);
};

module.exports = router;
