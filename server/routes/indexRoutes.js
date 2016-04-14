console.log("Hello?!?!?!?!");

var express = require('express');
var path = require('path');
var twentyUsers = require("../../personModules/twentyperson");

var router = express.Router();

router.get('/', function(request, response){
  console.log("get whack");
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get("/users", function(request, response) {
  console.log("get users");
  response.send(twentyUsers);
});

module.exports = router;
