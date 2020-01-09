var express = require('express');
var app = express();

// Setting for app here
app.use(express.static(__dirname + '/public'));
// Use View Engine
var expressHbs = require('express-handlebars');
var paginateHelper = require('express-handlebars-paginate');
var hbs = expressHbs.create({
	extname			: 'hbs',
	defaultLayout	: 'layout', 
	layoutsDir		: __dirname + '/views/layouts/',
	partialsDir		: __dirname + '/views/partials/',
	helpers			: {
		paginate: paginateHelper.createPagination
	}
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// Define your routes here
var models = require('./models');
app.get('/sync', function(req, res){
	models.sequelize.sync().then(function(){
		res.send('database sync completed!');
	});
});

app.use("/", require("./routes/indexRouter"));
app.use("/product", require("./routes/productRouter"));
app.use("/cart",require("./routes/cartRouter"));

app.get('/',(req,res)=>{
	res.render('index');
});
app.get('/:page',(req,res)=>{
	let page=req.params.page;
	res.render(page);
});

//Use body parser
let bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Use Cookie Parser
let cookieParser=require('cookie-parser');
app.use(cookieParser());

//Use Session
let session=require('express-session');
app.use(session({
	cookie:{httpOnly:true,maxAge:30*24*60*60*1000},
	secret:'S3cret',
	resave:false,
	saveUninitialized:false
}));

//Use Cart Controller
let Cart=require('./controllers/cartController');
app.use((req,res,next)=>{
	var cart=new Cart(req.session.cart?req.session.cart:{});
	req.session.cart=cart;
	res.locals.totalQuanity=cart.totalQuanity;
	next();
});

// Set Server Port & Start Server
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});