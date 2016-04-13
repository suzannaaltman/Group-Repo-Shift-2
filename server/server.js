var express = require("express");
var index = require('./routes/index.js');
var mongoose = require('mongoose');
var app = express();


mongoose.connect('mongodb://localhost/blueTeam');

app.use(express.static('server/public'));

app.use('/', index);





//  Server Listener

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});
