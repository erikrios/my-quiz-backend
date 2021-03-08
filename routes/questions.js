const express = require("express");
const Joi = require("joi");
const Question = require("../db/models/question");

const router = express.Router();

const validate = (body) => {
  const answerSchema = Joi.object({
    answer: Joi.string().min(1).max(100).required(),
    isCorrect: Joi.boolean().required(),
  });

  const answersSchema = Joi.array().items(answerSchema).min(2).required();

  const schema = Joi.object({
    question: Joi.string().min(3).max(500).required(),
    answers: answersSchema,
  });

  return schema.validate(body);
};

module.exports = router;
