var express = require('express');
var path = require('path');
var users = require('../modules/createTwentyUsers.js');
var userModel = require('../../models/userModel.js');
var router = express.Router();
// maybe add makeList here?
var app = express();

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// not working, router.get('/create') functions so no need for this
// router.get('/people', function(request, response){
//   var data = request.body;
//   userModel.find({}, function(err, people){
//     if(err){
//       console.log(err);
//       response.sendStatus(500);
//     } else {
//         response.send(people);
//     }
//
//   })
// });

router.get('/create', function(request, response){
  console.log('server works');
  response.send(users());
  response.sendStatus(200);
});

router.delete('/delete/:id', function(request, response){
  console.log('Delete request received');
  userModel.findOneAndRemove({_id: request.params.id}, function(err, person){
    if (err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Person deleted: ', person);
      response.sendStatus(200);
    }
  });
});



module.exports = router;
