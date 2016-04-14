//this is our route that creates users 20 times.

var createUser=require('./createUser');
var twentyUsers = [];

for (var it = 0; it < 20; it++) {
  twentyUsers.push(createUser());
}

module.exports = twentyUsers;
