var controller = {};

var models = require('../models');
let Sequelize = require("sequelize");
let Op = Sequelize.Op;

controller.getAll = function(query){
    let options = {
        where: {}
      };
      if (query.search) {
          if (query.search != "") {
            options.where.name = {
            [Op.iLike]: `%${query.search}%`
            }
        };
      }
    return models.Product.findAll(options);
};

controller.getByCategory = function(id) {
    let options = {
        where: {},
    }
   
    options.where.CategoryId = {
    [Op.eq]: id
    };
    return models.Product.findAll(options);
}
module.exports = controller;
