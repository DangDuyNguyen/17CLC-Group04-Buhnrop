let express = require('express');
let router = express.Router();

router.get('/', (req,res) => {
    let productDetailController = require("../controllers/categoryController");
    
    productDetailController.getAll(req.query)
    .then(data => {
        res.locals.category = data;
        let productController = require("../controllers/productDetailController");
        return productController.getAll();
    })
    .then(data => {
        res.locals.product = data;
        res.render('allProduct');
    })
    

});


module.exports = router;