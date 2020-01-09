'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductDetail = sequelize.define('ProductDetail', {
    summary: DataTypes.TEXT,
    imgPath: DataTypes.STRING
  }, {});
  ProductDetail.associate = function(models) {
    // associations can be defined here
    ProductDetail.belongsTo(models.Product);
  };
  return ProductDetail;
};