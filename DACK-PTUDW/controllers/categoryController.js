var controller = {};

var models = require('../models');
let Sequelize = require("sequelize");
let Op = Sequelize.Op;

controller.getAll = function(query){
    let options = {
        where: {},
        limit: 3
      };
      if (query.search) {
          if (query.search != "") {
            options.where.name = {
            [Op.iLike]: `%${query.search}%`
            }
        };
      }
    return models.Category.findAll(options);
};

module.exports = controller;
