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
   
    options.where.id = {
    [Op.eq]: id
    };
    return models.ProductDetail.findOne(options);
};

controller.getAll=(query)=>{
    let option={
    }
    return models.Product.findAll(option);
};

module.exports = controller;
