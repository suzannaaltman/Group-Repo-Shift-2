var express = require('express');
var mongoose = require('mongoose');

var indexRoutes = require('./routes/indexRoutes.js');
var Person = require('./models/model.js');
var app = express();

// DATABASE
var mongoUri = 'mongodb://localhost/userStore';
var MongoDB = mongoose.connect(mongoUri).connection;

MongoDB.on('error', function(err) {
  console.log('MongoDb connection error', err);
})

MongoDb.once('open', function() {
  console.log('MongoDb connection open.');
})

// ROUTERS
app.use('/', indexRoutes);
app.use(express.static('/server/public'));

// SERVER
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
