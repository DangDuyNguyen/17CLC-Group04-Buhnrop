let express = require('express');
let router = express.Router();

router.get('/', (req,res) => {
    let productDetailController = require("../controllers/productDetailController");
    
    productDetailController.getById(req.query.id).then(data => {
        res.locals.product = data;
        return res.render('product_detail');
    })
});


module.exports = router;