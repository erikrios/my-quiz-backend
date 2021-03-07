const { Sequelize } = require("sequelize");
const sequelize = require("./index");

const Answer = sequelize.define(
  "answer",
  {
    answers: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isCorrect: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Answer;
