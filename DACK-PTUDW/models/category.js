'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Imagepath: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};