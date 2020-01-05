 let express = require('express');
 let app = express();

// set public static folder
app.use(express.static(__dirname + '/public'));

//Use view Engine
let expressHandleBar = require('express-handlebars');
let hbs = expressHandleBar.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',    
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


//Define routes
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/sign-in', (req, res) => {
    res.render('sign_in');
})

app.get('/user-approve', (req,res) => {
    res.render('approveduser');
})

app.get('/Auction-Cart', (req,res) => {
    res.render('AuctionCart');
})

app.get('/Bidding-Product', (req,res) => {
    res.render('biddingProducts');
})

app.get('/Cellphone', (req,res) => {
    res.render('cellphone');
})

app.get('/Edit-Profile', (req,res) => {
    res.render('EditpersonalArea');
})

app.get('/Edit-Profile-Admin', (req,res) => {
    res.render('EditpersonalAreaAdmin');
})

app.get('/Favourite-List', (req,res) => {
    res.render('favourite');
})

app.get('/Headphone', (req,res) => {
    res.render('headphone');
})

app.get('/Ipad', (req,res) => {
    res.render('ipad');
})

app.get('/Category-List', (req,res) => {
    res.render('listcategory');
})

app.get('/Product-List', (req,res) => {
    res.render('listproduct');
})

app.get('/User-List', (req,res) => {
    res.render('listuseradmin');
})

app.get('/My-Profile', (req,res) => {
    res.render('personalArea');
})

app.get('/Admin-Profile', (req,res) => {
    res.render('personalAreaAdmin');
})

app.get('/Personal-Profile', (req,res) => {
    res.render('personalProfile');
})

app.get('/Product-Detail', (req,res) => {
    res.render('product_detail');
})

app.get('/Refuse', (req,res) => {
    res.render('refuse');
})

app.get('/Seller', (req,res) => {
    res.render('seller');
})

app.get('/Shoes', (req,res) => {
    res.render('shoes');
})

app.get('/Sign-up', (req,res) => {
    res.render('sign_up');
})

app.get('/Bidded-Product', (req,res) => {
    res.render('wonProducts');
})

app.use
 //set Server port and Start server
 app.set('port', process.env.PORT || 4000);
 app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
 });