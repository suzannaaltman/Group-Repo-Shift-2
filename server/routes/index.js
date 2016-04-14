var express = require('express');
var path = require('path');
var users = require('../modules/createTwentyUsers.js');
var userModel = require('../../models/userModel.js');
var router = express.Router();

var app = express();

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});


router.get('/people', function(request, response){
  userModel.find({}, function(err, people){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
        response.send(people);
    }

  })
});

router.get('/create', function(request, response){
  console.log('server works');
  response.send(users());
  response.sendStatus(200);
})



module.exports = router;
