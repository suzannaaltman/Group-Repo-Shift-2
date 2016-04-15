var express = require('express');
var mongoose = require('mongoose');
//  This file is breaking before this line
//  We think it has something to do with person.js
//  We're trying to trace it with console logs back through the path
var indexRoutes = require('./routes/indexRoutes');
var bodyParser = require('body-parser');
var app = express();

// DATABASE
var mongoUri = 'mongodb://localhost/repo-shift-2';
var MongoDB = mongoose.connect(mongoUri).connection;

MongoDB.on('error', function(err) {
  console.log('MongoDb connection error', err);
});

MongoDB.once('open', function() {
  console.log('MongoDb connection open.');
});

// ROUTERS
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/', indexRoutes);

// SERVER
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
