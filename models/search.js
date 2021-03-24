'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Search.init({
    locationA: DataTypes.STRING,
    locationB: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    caselocationA: DataTypes.INTEGER,
    caselocationB: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Search',
  });
  return Search;
};