const { Sequelize } = require("sequelize");
const sequelize = require("./index");

const Question = sequelize.define(
  "question",
  {
    question: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Question;
