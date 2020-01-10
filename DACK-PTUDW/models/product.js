'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    npc: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imgPath: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Category);
    Product.hasOne(models.ProductDetail);
  };
  return Product;
};
