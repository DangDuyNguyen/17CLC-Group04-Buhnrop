'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "Username": "admin@gmail.com",
      "Password": "12345",
      "Fullname": "admin",
      "Email": "admin@gmail.com",
      "Phone": "0909000000",
      "Sex": 0,
      "AvatarPath": "./image/user/default-avatar.jpg",
      "Address": "123 Admin Street",
      "isAdmin": true,
    }, {
      "id": 2,
      "Username": "user@gmail.com",
      "Password": "12345",
      "Fullname": "user",
      "Email": "user@gmail.com",
      "Phone": "0900000000",
      "Sex": 1,
      "AvatarPath": "./image/user/default-avatar.jpg",
      "Address": "123 Null Street",
      "isAdmin": false,
    }];
    
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    
    return queryInterface.bulkInsert('Users', data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', data);
  }
};
