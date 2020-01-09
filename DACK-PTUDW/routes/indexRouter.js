let express = require('express');
let router = express.Router();

router.get('/', (req,res) => {
    let categoryController = require("../controllers/categoryController");
    if (req.query.search == null || req.query.search.trim() == "") {
        req.query.search = "";
      }
    categoryController.getAll(req.query).then(data => {
        res.locals.category = data;
        return res.render('index');
    })
});

router.get('/searchResult', (req,res,next) => {
    let productController = require("../controllers/productController");
    if (req.query.search == null || req.query.search.trim() == "") {
        req.query.search = "";
      }
    if (req.query.type == null) {
        req.query.type == "name";
    }
    console.log(req.query);

    if (req.query.type == "category") {
        let categoryController = require("../controllers/categoryController");
        categoryController.getAll(req.query).then(data => {
            productController.getByCategory(data[0].dataValues.id).then(data => {
                res.locals.product = data;
                return res.render('searchResult');
            })
        })
    }
    else {
        productController.getAll(req.query).then(data => {
            res.locals.product = data;
            return res.render('searchResult');
        })
    }
   
});

module.exports = router;