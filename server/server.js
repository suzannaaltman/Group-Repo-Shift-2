var express = require("express");
var mongoose = require("mongoose");
var index = require("./routes/index");

var app = express();

mongoose.connect("mongodb://localhost/redTeam");

app.use(express.static('server/public'));
app.use("/", index);


var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Listening on port", port);
});
