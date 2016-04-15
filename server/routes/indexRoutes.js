var express = require('express');
var path = require('path');
var twentyUsers = require("../../personModules/twentyperson");
var model = require("../../models/model.js");

var router = express.Router();

router.get('/', function(request, response){
  console.log("get whack");
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// router.get('/all', function(request, response){
//   console.log("yep");
//   model.find({}, function(err, users){
//     if(err){
//       console.log(err);
//       response.sendStatus(500);
//     } else {
//       response.send(users);
//     }
//   })
// })

router.get("/create", function(request, response) {
  console.log("get users");
  response.send(twentyUsers());

});

module.exports = router;
