'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "addedDate": "2019-04-18"
    }, {
      "id": 2,
      "addedDate": "2019-09-25"
    }, {
      "id": 3,
      "addedDate": "2019-07-12"
    }, {
      "id": 4,
      "addedDate": "2019-08-16"
    }, {
      "id": 5,
      "addedDate": "2019-11-25"
    }, {
      "id": 6,
      "addedDate": "2019-07-07"
    }, {
      "id": 7,
      "addedDate": "2019-11-21"
    }, {
      "id": 8,
      "addedDate": "2019-07-03"
    }, {
      "id": 9,
      "addedDate": "2019-07-05"
    }, {
      "id": 10,
      "addedDate": "2019-07-28"
    }];
    
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    
    return queryInterface.bulkInsert('Libraries', data);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Libraries', null, {});
  }
};
