'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
  {
    summary:'Battlefield 1 is a first-person shooter game that emphasizes teamwork. It is set in the period of World War I, and is inspired by historical events. Players can make use of World War I weapons, including bolt-action rifles, submachine guns, automatic and semi-automatic rifles, artillery, flamethrowers, and mustard gas to combat opponents. Melee combat was reworked, with DICE introducing new melee weapons such as sabres, trench clubs, and shovels into the game. These melee weapons were divided into three groups: heavy, medium and light.[11] Players can also take control of various armored vehicles, including light and heavy tanks, armored trucks, cars, torpedo boats, bi- and tri-plane aircraft, an armored train, reconnaissance vehicles, a dreadnought and an M-class zeppelin, as well as ride horses into battle.[12] Destructible environments and weapon customization, features present in the previous games, returned in Battlefield 1 and are more dynamic',
    imgPath: 'img/game/batterfield.jpg',
  },
  {
    summary:'Dont Starve Together is the standalone multiplayer expansion of the uncompromising wilderness survival game, Dont Starve. Enter a strange and unexplored world full of strange creatures, dangers, and surprises. Gather resources to craft items and structures that match your survival style',
    imgPath: 'img/game/starve.jpg',
  },
  {
    summary:'Terraria is an action-adventure sandbox game developed by Re-Logic. The game was initially released for Microsoft Windows on May 16, 2011, and has since been released for other PC, consoles, handhelds, and mobile platform',
    imgPath: 'img/game/terraria.jpg',
  },
  {
    summary:'The game consists of a variety of heists that a player can opt to either carry out by themselves, with the AI, or as part of a multiplayer game. There are heists such as bank robberies, drug trafficking runs, rigging an election, or stealing smuggled nuclear warheads. Some of the heists put a large emphasis on stealth, often leading to bonus experience points and money on completion, and certain heists can only be done in stealth',
    imgPath: 'img/game/payday.jpg',
  },
  {
    summary:'Age of Empires is a series of historical real-time strategy video games, originally developed by Ensemble Studios and published by Xbox Game Studios. The first game of the series was Age of Empires, released in 1997. Seven other games and three spin-offs have been released',
    imgPath: 'img/game/empire.jpg',
  },
  {
    summary:'League of Legends is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. The game follows a freemium model and is supported by microtransactions, and was inspired by the Warcraft III: The Frozen Throne mod, Defense of the Ancients',
    imgPath: 'img/game/lol.jpg',
  },
  {
    summary:'Battle Realms is a real-time strategy video game published and released by Crave Entertainment and Ubisoft in November 2001. It was the first game created by Liquid Entertainment. An expansion pack Battle Realms: Winter of the Wolf was released in November 2002. In 2012, the game was re-released on GOG.com',
    imgPath: 'img/game/battlerealms.jpg',
  },
  {
    summary:'Tekken 7 is a fighting game developed and published by Bandai Namco Entertainment. It is the seventh installment in the Tekken series, and was the first to make use of the Unreal Engine. Tekken 7 had a limited arcade release in March 2015',
    imgPath: 'img/game/tekken.jpg',
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
   return queryInterface.bulkDelete('ProductDetails', null, {});
  }
};