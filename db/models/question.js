module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "question",
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return Question;
};
