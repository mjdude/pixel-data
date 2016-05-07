var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var PORT = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res){
    console.log('Pixel-Data Server Root');
} );

// Log data fron client

// GET /pixel
app.get('/pixel', function(req, res){
  var params = req.params;
  console.log(called );
  console.log(res);
  console.log(params);
  res.status(200).send();
});

app.listen(PORT, function() {
    console.log('Express listening on port : ' + PORT);
});
