var express = require('express');

var indexRoutes = require('./routes/indexRoutes.js');
var Person = require('./models/model.js');
var app = express();

app.use('/', indexRoutes);
app.use(express.static('/server/public'));

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
