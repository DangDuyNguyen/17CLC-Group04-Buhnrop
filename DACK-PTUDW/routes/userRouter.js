let express = require('express');
let router = express.Router();
let userController = require("../controllers/userController");
let bcrypt = require("bcryptjs");


router.get('/login', (req,res) => {
    res.render('sign_in');
});

router.get('/register', (req,res) => {
    res.render('sign_up');
});


router.post('/login', (req, res, next) =>{
    let password = req.body.password;
    let keepLoggedIn = (req.body.keepLoggedIn != undefined)
    userController
        .getUserByEmail(req.body.username)
        .then(user => {
            if (user) {
                if (userController.comparePassword(password, user.Password)) {
                    req.session.cookie.maxAge = keepLoggedIn ? 30 * 24 * 60 * 60 * 100 : null;
                    req.session.user = user;
                    if (user.isAdmin == true){
                        res.redirect('/admin')
                    } else{
                        res.redirect('/');
                    }
                    
                } else {
                    res.render('sign_in', {
                        message: 'Incorrect Password!',
                        type: 'alert-danger'
                    });
                }
            } else {
                res.render('sign_in', {
                    message: 'Email does not exist!',
                    type: 'alert-danger'
                });
        }
        })
});

router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            return renext(error);
        }
        return res.redirect('login');
    })
});
module.exports = router;