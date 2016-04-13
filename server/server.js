var express=require('express');
var mongoose=require('mongoose');
var index=require('./routes/index')
var getUsers=require('./routes/getUsers');
var app=express();

app.use('/', index);

app.use('/getUsers', getUsers);






var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on port', port);
});
