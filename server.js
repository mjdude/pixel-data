var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res){
    console.log('Pixel-Data Server Root');
} );
