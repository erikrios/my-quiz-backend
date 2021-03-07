module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    "answer",
    {
      answers: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return Answer;
};
