'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   let data = [{
     name: 'Playerunknowns battlegrounds',
     npc: 'Tencent Games',
     price: 265000,
     imgPath: 'img/game/pubg.jpg',
    
   },
   {
    name: 'Counter-Strike: Global Offensive',
    npc: 'Valve Corporation',
    price: 160000,
    imgPath: 'img/game/csgo.jpg',
    
  },
  {
    name: 'Rust',
    npc: 'Facepunch Studios',
    price: 240000,
    imgPath: 'img/game/rush.jpg',
   
  },
  {
    name: 'The Witcher 3: Wild Hunt',
    npc: 'CD Projekt',
    price: 720000,
    imgPath: 'img/game/witcher.jpg',
   
  },
  {
    name: 'Stardew Valley',
    npc: 'Sickhead Games',
    price: 245000,
    imgPath: 'img/game/stardewvalley.jpg',
    
  },
  {
    name: 'WarFrame',
    npc: 'Tencent Games',
    price: 230000,
    imgPath: 'img/game/warframe.jpg',

  },
  ];
  data.map(item =>{
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  });
  return queryInterface.bulkInsert('Products', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Products', null, {});
  }
};
