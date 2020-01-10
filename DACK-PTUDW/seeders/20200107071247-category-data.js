'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [
     {
        Name: 'Adventure',
        Description: 'Game with storyline and character proccessing',
        Imagepath: 'img/1.jpg'
     },
     {
        Name: 'Action',
        Description: 'Interaction with characters and ingame objectives',
        Imagepath: 'img/2.jpg'
      },
      {
        Name: 'Farm',
        Description: 'Game with farming',
        Imagepath: 'img/3.jpg'
      }
    ];
    data.map(item =>{
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Categories', data, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Categories', null, {});
  }
};