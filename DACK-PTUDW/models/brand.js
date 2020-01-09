'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Imagepath: DataTypes.TEXT
  }, {});
  Brand.associate = function(models) {
    // associations can be defined here
  };
  return Brand;
};