var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname) + '/index.html');
})

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'));

console.log('Here we go!');
