var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index');

var MongoDB = mongoose.connect('mongodb://localhost/repo-shift-2').connection;

MongoDB.on('error', function(err) {
  console.log('MongoDB connection error: ', err);
});

MongoDB.once('open', function() {
  console.log('MongoDB connection open');
})

var app = express();

app.use(express.static('server/public'));

app.use('/', index);

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
});
