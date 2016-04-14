var express = require("express");
var mongoose = require("mongoose");
var index = require("./routes/index");
var mongoUri = "mongodb://localhost/redTeam";
var MongoDB = mongoose.connect(mongoUri).connection;

var app = express();

MongoDB.on('error', function(err) {
  console.log('MongoDB connection error:', err);
})

MongoDB.once('open', function() {
  console.log('MongoDB connection open.');
})

app.use(express.static('server/public'));
app.use("/", index);

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});
