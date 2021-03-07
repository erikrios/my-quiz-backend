const { Sequelize } = require("sequelize");
const dbConfig = require("../config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = require("./category")(sequelize, Sequelize);
db.Question = require("./question")(sequelize, Sequelize);
db.Answer = require("./answer")(sequelize, Sequelize);

db.Category.hasMany(db.Question, { as: "questions" });
db.Question.belongsTo(db.Category, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
  as: "category",
});

db.Question.hasMany(db.Answer, { as: "answers" });
db.Answer.belongsTo(db.Question, {
  foreignKey: {
    name: "questionId",
    allowNull: false,
  },
  as: "question",
});

module.exports = db;
