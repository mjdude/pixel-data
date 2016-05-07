var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var PORT = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res){
    console.log('Pixel-Data Server Root');
} );

// Log data fron client

app.get('/img', function(req, res){
  var params = req.params;
  console.log(params);

});

app.listen(PORT, function() {
    console.log('Express listening on port : ' + PORT);
});
