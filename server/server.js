var express = require("express");
var index = require('./routes/index.js');
var mongoose = require('mongoose');
var app = express();

app.use('/', index);
app.use(express.static('server/public'));

mongoose.connect('mongodb://localhost/blueTeam');


//  Server Listener

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});
