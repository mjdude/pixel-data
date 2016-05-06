var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res){
    console.log('Pixel-Data Server Root');
} );

// Log data fron client

app.get('/img', function(req, res){

});

app.listen(PORT , function(){
  console.log('starting server on ' + PORT);
})
