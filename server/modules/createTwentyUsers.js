var newUser = require("./createSingleUser");
var users = [];

for (var it = 0; it < 20; it++) {
  users.push(newUser());
}

module.exports = users;
