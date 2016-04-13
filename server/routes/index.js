var express = require('express');
var path = require('path');
var users = require('../modules/createTwentyUsers.js');
var router = express.Router();

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/newuser', function(request, response){
  // console.log(user());
  response.send(users);
});


module.exports = router;
