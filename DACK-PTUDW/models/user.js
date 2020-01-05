'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Fullname: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Sex: DataTypes.INTEGER,
    Address: DataTypes.STRING,
    UserType: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};