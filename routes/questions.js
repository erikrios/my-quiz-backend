const express = require("express");
const Joi = require("joi");
const auth = require("../middleware/auth");
const Question = require("../db/models/question");
const Category = require("../db/models/category");
const Response = require("../models/response");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send(new Response("Bad Request", error.message, null));

  const { question, categoryId, answers } = req.body;

  try {
    const category = await Category.findByPk(categoryId);
    if (!category)
      return res
        .status(404)
        .send(
          new Response(
            "Not Found",
            `Category with id ${categoryId} not found.`,
            null
          )
        );

    const result = await Question.create(
      {
        question: question,
        categoryId: categoryId,
        answers: answers,
      },
      {
        include: [{ association: Question.Answers, as: "answers" }],
      }
    );

    res.send(new Response("OK", null, result));
  } catch (e) {
    res
      .status(500)
      .send(new Response("Internal Server Error", e.message, null));
  }
});

const validate = (body) => {
  const answerSchema = Joi.object({
    answer: Joi.string().min(1).max(100).required(),
    isCorrect: Joi.boolean().required(),
  });

  const answersSchema = Joi.array().items(answerSchema).min(2).required();

  const schema = Joi.object({
    question: Joi.string().min(3).max(500).required(),
    categoryId: Joi.number().greater(0).required(),
    answers: answersSchema,
  });

  return schema.validate(body);
};

module.exports = router;
