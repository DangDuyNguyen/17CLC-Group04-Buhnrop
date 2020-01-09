'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      "id": 1,
      "createDate": "1/10/2019",
      "Status": 1
    }, {
      "id": 2,
      "createDate": "11/30/2019",
      "Status": 2
    }, {
      "id": 3,
      "createDate": "7/29/2019",
      "Status": 2
    }, {
      "id": 4,
      "createDate": "12/9/2019",
      "Status": 0
    }, {
      "id": 5,
      "createDate": "1/29/2019",
      "Status": 1
    }, {
      "id": 6,
      "createDate": "11/26/2019",
      "Status": 2
    }, {
      "id": 7,
      "createDate": "4/24/2019",
      "Status": 2
    }, {
      "id": 8,
      "createDate": "12/15/2019",
      "Status": 2
    }, {
      "id": 9,
      "createDate": "9/23/2019",
      "Status": 2
    }, {
      "id": 10,
      "createDate": "9/30/2019",
      "Status": 1
    }, {
      "id": 11,
      "createDate": "4/23/2019",
      "Status": 1
    }, {
      "id": 12,
      "createDate": "2/19/2019",
      "Status": 0
    }, {
      "id": 13,
      "createDate": "5/24/2019",
      "Status": 1
    }, {
      "id": 14,
      "createDate": "5/14/2019",
      "Status": 2
    }, {
      "id": 15,
      "createDate": "3/3/2019",
      "Status": 1
    }, {
      "id": 16,
      "createDate": "8/12/2019",
      "Status": 1
    }, {
      "id": 17,
      "createDate": "2/23/2019",
      "Status": 0
    }, {
      "id": 18,
      "createDate": "9/30/2019",
      "Status": 0
    }, {
      "id": 19,
      "createDate": "12/15/2019",
      "Status": 0
    }, {
      "id": 20,
      "createDate": "7/26/2019",
      "Status": 2
    }];
    
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    
    return queryInterface.bulkInsert('Orders', data);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Orders', null, {});
  }
};
