'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    Name: DataTypes.STRING,
    Imagepath: DataTypes.TEXT,
    status: DataTypes.INTEGER,
    Description: DataTypes.STRING,
    Price: DataTypes.FLOAT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Category, { foreignKey: 'categoryID'});
    Product.belongsTo(models.Brand, { foreignKey: 'brandID'});

  };
  return Product;
};