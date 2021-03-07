const sequelize = require("./models/index");
const Category = require("./models/category");
const Question = require("./models/question");
const Answer = require("./models/answer");

Category.hasMany(Question, { as: "questions" });
Question.belongsTo(Category, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
  as: "category",
});

Question.hasMany(Answer, { as: "answers" });
Answer.belongsTo(Question, {
  foreignKey: {
    name: "questionId",
    allowNull: false,
  },
  as: "question",
});

module.exports = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Postgres connection has been established successfully.");
  } catch (e) {
    console.error(`Unable to connecto to the database: ${e}`);
  }
};
