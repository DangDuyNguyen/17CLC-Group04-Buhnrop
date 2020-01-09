'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Fullname: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Sex: DataTypes.INTEGER,
    AvatarPath: DataTypes.STRING,
    Address: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    
  };
  return User;
};