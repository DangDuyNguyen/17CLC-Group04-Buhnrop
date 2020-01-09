'use strict';
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('Library', {
    addedDate: DataTypes.DATE
  }, {});
  Library.associate = function(models) {
    // associations can be defined here;
    Library.belongsTo(models.User, {foreignKey: 'UserID'})
    Library.belongsTo(models.Product, {foreignKey: 'LibProductID'});
  };
  return Library;
};