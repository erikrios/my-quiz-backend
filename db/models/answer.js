module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define("answer", {
    answers: {
      type: DataTypes.STRING,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Answer;
};
