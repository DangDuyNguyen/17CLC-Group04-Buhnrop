'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    createDate: DataTypes.DATE,
    Status: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User, {foreignKey: 'UserID'});
    Order.belongsTo(models.Product, {foreignKey: 'OrderProductID'});
  };
  return Order;
};