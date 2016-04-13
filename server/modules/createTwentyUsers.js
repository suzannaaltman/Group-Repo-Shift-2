var user = require('./createSingleUser.js');
var userList = [];

for(var i = 0; i < 20; i++){
  userList.push(user());
}

module.exports = userList;
