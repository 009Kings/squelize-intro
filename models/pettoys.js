'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petToys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  petToys.init({
    petId: DataTypes.INTEGER,
    toyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'petToys',
  });
  return petToys;
};