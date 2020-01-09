var controller = {};

var models = require('../models');
let Sequelize = require("sequelize");
let Op = Sequelize.Op;


controller.getById = function(id) {
    let options = {
        where: {},
        include: {
            model: models.Product,
            include: {
                model: models.Category
            }
        }
    }
   
    options.where.ProductId = {
    [Op.eq]: id
    };
    return models.ProductDetail.findOne(options);
}
module.exports = controller;
