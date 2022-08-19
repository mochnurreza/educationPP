'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsToMany(models.Quiz, {
      //   through:models.Score
      // })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "cant be empty" }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "cant be empty" }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "cant be empty" }
      }
    }
  },
    {
      sequelize,
      modelName: 'User',
    });
  return User;
};