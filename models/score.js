
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Score.hasMany(models.User)
      // Score.hasMany(models.Quiz)
    }
  }
  Score.init({
    score: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "cant be empty" }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "cant be empty" }
      }
    },
    QuestionId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "cant be empty" }
      }
    }
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};
