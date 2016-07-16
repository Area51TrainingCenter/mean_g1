var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
//mongoose.connect('mongodb://admin:peptic.far@ds021434.mlab.com:21434/pokemon_yfx');
// console.log('here -> '+mongoose)
// console.log(mongoose)

//Call the packages
var express = require('express');
var app = express();
var path = require('path');
var adminRouter = express.Router();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 5000;


//var externalRouter = express.Router();
//var publicRouter = express.Router();

// APP CONFIGURATION
app.use(bodyParser.urlencoded({ extended:true }));

app.use(bodyParser.json());

//CORS
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-Width, content-type, Authorization');
  next();
})

//
app.use(morgan('dev'));











app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname) + '/index.html');
})

// Middleware
// adminRouter.use(function (req, res, next){
//   console.log('---> ',req.method, req.url)
//   next();
// })

adminRouter.param('name', function(req, res, next, name) {
    console.log("req.name:", req.name);
    console.log("-->name:", name);
    req.name = "Mr. Robot was here!";
    console.log("req.name:", req.name);
    next();
})

adminRouter.param('id', function(req, res, next, id) {
    console.log("req.id:", req.id);
    console.log("id:", id);
    req.id = "Mr. Robot was here too!";
    console.log("req.id:", req.id);
    next();
})

// Rutas
adminRouter.get('/', function(req, res) {
    res.send('Estoy en la página principal del admin');
})
.get('/users', function(req, res) {
    console.log('Ya llegue a la vista de usuarios')
    res.send('Aquí se mostraran los usuarios');
})

adminRouter.get('/users/:id/:name', function(req, res) {

    //res.send('Hola '+req.params.name);
    res.send('Hola ' + req.name);

})

adminRouter.get('/posts', function(req, res) {
    res.send('Aquí se mostraran los artículos');
})

app.use('/admin', adminRouter);



app.route('/account')
    .get(function(req, res) {
        console.log('Método GET');
        res.send('Método GET');
    })
    .post(function(req, res) {
        console.log('Método POST');
        res.send('Método POST');
    })
    .put(function(req, res) {
        console.log('Método PUT');
        res.send('Método PUT');
    })
    .delete(function(req, res) {
        console.log('Método DELETE');
        res.send('Método DELETE');
    })




//app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'));

console.log('Here we go!');
