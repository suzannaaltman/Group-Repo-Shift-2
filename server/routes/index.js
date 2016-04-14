var express = require("express");
var users = require("../modules/createTwentyUsers");

var router = express.Router();

router.get("/", function(request, response) {
  response.send("Hi from index!!");

  //  Returning twenty unique user objects
  console.log(users);
});

module.exports = router;
