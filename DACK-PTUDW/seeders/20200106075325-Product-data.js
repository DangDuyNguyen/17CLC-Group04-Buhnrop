'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
  
  {
    name: 'Batterfields',
    npc: 'Epic games',
    price: 450000,
    imgPath: 'img/game/batterfield.jpg',
  },
  {
    name: 'Dont starve together',
    npc: 'Klei studio',
    price: 130000,
    imgPath: 'img/game/starve.jpg',
  },
  {
    name: 'Terraria',
    npc: 'Valve',
    price: 120000,
    imgPath: 'img/game/terraria.jpg',
  },
  {
    name: 'Payday2',
    npc: 'Valve',
    price: 235000,
    imgPath: 'img/game/payday.jpg',
  },
  {
    name: 'Age of empire',
    npc: 'Valve',
    price: 330000,
    imgPath: 'img/game/empire.jpg',
  },
  {
    name: 'League of Legends',
    npc: 'Riots',
    price: 135000,
    imgPath: 'img/game/lol.jpg',
  },
  {
    name: 'Battle Realms',
    npc: 'Epic games',
    price: 430000,
    imgPath: 'img/game/battlerealms.jpg',
  },
  {
    name: 'Tekken 7',
    npc: 'Valve',
    price: 360000,
    imgPath: 'img/game/tekken.jpg',
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
   return queryInterface.bulkDelete('Products', null, {});
  }
};