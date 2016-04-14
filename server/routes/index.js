var express = require('express');
var path = require('path');
var create20 = require('../modules/create20');
var User = require('../../models/user');


var router= express.Router();



router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/create', function(request, response) {
  console.log('hello from index.js router');
  // response.sendStatus(200);
  response.send(create20());
});

router.get('/people', function(request, response) {
  var data = request.body;
  User.find({}, function(err, people) {
    if(err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(people);
    }
  })
});



module.exports = router;
