'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Quiz.belongsTo(models.Answer)
      // Quiz.belongsToMany(models.User, {
      //   through:models.Score
      // })
    }
  }
  Quiz.init({
    question: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "cant be empty" }
      }
    },
    AnswerId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "cant be empty" }
      }
    }
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};