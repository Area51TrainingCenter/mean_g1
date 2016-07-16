//Call the packages
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./models/user')


var port = process.env.PORT || 5000;


// APP CONFIGURATION
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-Width, content-type, Authorization');
    next();
})

//Loggin all request to the console
app.use(morgan('dev'));

//DB conecction
mongoose.connect('mongodb://localhost/pokemon');
//mongoose.connect('mongodb://admin:peptic.far@ds021434.mlab.com:21434/pokemon_yfx');

//API ROUTES
//Main/basic route
app.get('/', function(req, res) {
    res.send('Welcome to the real world!');
});

//Express router instance
var apiRouter = express.Router();

//Accesed at GET http://localhost:5000/api
apiRouter.get('/', function(req, res) {
    res.json({
        message: 'Welcome to Zion! (Our mother API)'
    });
});

// Routes /users
apiRouter.route('/users')
    //Create a user through POST
    //URL: http://localhost:5000/api/users
    .post(function(req, res) {
        var user = new User();
        user.name = req.body.name;
        user.username = req.body.username;
        user.password = req.body.password;

        user.save(function(err) {
            //Verify duplicate entry on username
            if (err) {
              //console.log(err)
                if (err.code == 11000) {
                    console.log(err)
                    return res.json({
                        success: false,
                        message: 'El nombre de usuario ya existe.'
                    })
                }
            }

            res.json({
                message: 'El usuario se ha creado'
            });

        });

    })
    //Get all users through GET
    //URL: http://localhost:5000/api/users
    .get(function(req, res) {
      User.find(function(err, users){
        if(err) return res.send(err);

        res.json(users)
      })
    })


//Register our Routes
app.use('/api', apiRouter)

app.listen(port);
console.log('Neo comes over port ' + port);








//
//
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname) + '/index.html');
// })

// Middleware
// adminRouter.use(function (req, res, next){
//   console.log('---> ',req.method, req.url)
//   next();
// })
//
// adminRouter.param('name', function(req, res, next, name) {
//     console.log("req.name:", req.name);
//     console.log("-->name:", name);
//     req.name = "Mr. Robot was here!";
//     console.log("req.name:", req.name);
//     next();
// })
//
// adminRouter.param('id', function(req, res, next, id) {
//     console.log("req.id:", req.id);
//     console.log("id:", id);
//     req.id = "Mr. Robot was here too!";
//     console.log("req.id:", req.id);
//     next();
// })
//
// // Rutas
// adminRouter.get('/', function(req, res) {
//     res.send('Estoy en la página principal del admin');
// })
// .get('/users', function(req, res) {
//     console.log('Ya llegue a la vista de usuarios')
//     res.send('Aquí se mostraran los usuarios');
// })
//
// adminRouter.get('/users/:id/:name', function(req, res) {
//
//     //res.send('Hola '+req.params.name);
//     res.send('Hola ' + req.name);
//
// })
//
// adminRouter.get('/posts', function(req, res) {
//     res.send('Aquí se mostraran los artículos');
// })
//
// app.use('/admin', adminRouter);
//
//
//
// app.route('/account')
//     .get(function(req, res) {
//         console.log('Método GET');
//         res.send('Método GET');
//     })
//     .post(function(req, res) {
//         console.log('Método POST');
//         res.send('Método POST');
//     })
//     .put(function(req, res) {
//         console.log('Método PUT');
//         res.send('Método PUT');
//     })
//     .delete(function(req, res) {
//         console.log('Método DELETE');
//         res.send('Método DELETE');
//     })
//
//
//
//
// //app.set('port', (process.env.PORT || 5000))
//
// app.listen(app.get('port'));
//
// console.log('Here we go!');
