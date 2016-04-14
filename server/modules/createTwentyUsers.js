var newUser = require("./createSingleUser");


var createUsers = function() {
  var users = [];
  for (var it = 0; it < 20; it++) {
    users.push(newUser());
  }
  return users;
}

module.exports = createUsers;
