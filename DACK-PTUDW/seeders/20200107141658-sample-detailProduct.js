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
     summary: 'PlayerUnknowns Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole. The game is based on previous mods that were created by Brendan "PlayerUnknown" Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greenes creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game s map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round',
     imgPath: 'img/game/pubg.jpg',
    
   },
   {
    summary: 'Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series and was released for Windows, OS X, Xbox 360, and PlayStation 3 in August 2012, while the Linux version was released in 2014.The game pits two teams against each other: the Terrorists and the Counter-Terrorists. Both sides are tasked with eliminating the other while also completing separate objectives. The Terrorists, depending on the game mode, must either plant the bomb or defend the hostages, while the Counter-Terrorists must either prevent the bomb from being planted, defuse the bomb, or rescue the hostages. There are nine game modes, all of which have distinct characteristics specific to that mode. The game also has matchmaking support that allows players to play on dedicated Valve servers, as well as allowing members of the community to host their own servers with custom maps and game modes',
    imgPath: 'img/game/csgo.jpg',
    
  },
  {
    summary: 'Rust is a multiplayer-only survival video game developed by Facepunch Studios. Rust was first released in early access in December 2013 and received its full release in February 2018. Rust is available on Microsoft Windows, macOS and Linux. Console versions for PlayStation 4 and Xbox One have been announced for release in 2020.[1] Rust was initially created as a clone of DayZ, a popular mod for ARMA 2, with crafting elements akin to those in Minecraft. The objective of Rust is to survive in the wilderness using gathered or stolen materials. Players must successfully manage their hunger, thirst, and health, or risk dying. Despite the looming threat of bears and wolves, the primary menace is other players due to the game being solely multiplayer. Combat is accomplished through firearms and primitive weapons, such as bows. In addition, vehicles controlled by non-player characters will occasionally roam, attacking heavily-armed players. These can be defeated with persistence. Rust features crafting, though initially limited until the discovery of specific items in the game s open world. To stay protected, players must build bases or join clans to improve their chance of survival. Raiding is a major aspect of Rust and is done more frequently by large clans',
    imgPath: 'img/game/rush.jpg',
   
  },
  {
    summary: 'The Witcher 3: Wild Hunt[a] is a 2015 action role-playing game developed and published by CD Projekt and based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings, played in an open world with a third-person perspective. Players control protagonist Geralt of Rivia, a monster hunter (known as a witcher) who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her and use her powers. Players battle the game s many dangers with weapons and magic, interact with non-player characters, and complete main-story and side quests to acquire experience points and gold, which are used to increase Geralt s abilities and purchase equipment. Its central story has several endings, determined by the player s choices at certain points in the game',
    imgPath: 'img/game/witcher.jpg',
   
  },
  {
    summary: 'Stardew Valley is a simulation role-playing video game developed by Eric "ConcernedApe" Barone and originally published by Chucklefish. The game was initially released for Microsoft Windows in February 2016, with ports later being released for macOS, Linux, PlayStation 4, Xbox One, Nintendo Switch, PlayStation Vita, iOS, and Android. In Stardew Valley, players takes the role of a character who, to get away from the hustle of the city, takes over their deceased grandfather s dilapidated farm in a place known as Stardew Valley. The game is open-ended, allowing players to take on several activities such as growing crops, raising livestock, crafting goods, mining for ores, selling produce, and socializing with the townsfolk, including marriage and having children. The game also allows up to three other players to play together online',
    imgPath: 'img/game/stardewvalley.jpg',
    
  },
  {
    summary: 'Warframe is a free-to-play cooperative action role playing and third-person shooter multiplayer online game developed and published by Digital Extremes. Originally released for Windows PC, it was later ported to the PlayStation 4, Xbox One, and Nintendo Switch. In Warframe, players control members of the Tenno, a race of ancient warriors who have awoken from centuries of cryosleep to find themselves at war in a planetary system with different factions. The Tenno use their powered Warframes along with powerful weapons and abilities to complete missions. While many of the game s missions use procedurally-generated levels, newer updates have included large open world areas similar to other massively multiplayer online games as well as some story-specific missions that dont use procedural generation. The game includes elements of shooting and melee games, parkour, and role-playing to allow players to advance their Tenno with improved gear',
    imgPath: 'img/game/warframe.jpg',

  },
   
   
  ];
  data.map(item =>{
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  });
  return queryInterface.bulkInsert('ProductDetails', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('ProductDetails', null, {});
  }
};
