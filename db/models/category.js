const { Sequelize } = require("sequelize");
const sequelize = require("./index");

const Category = sequelize.define(
  "category",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Category;
