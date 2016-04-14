var user = require('./createSingleUser.js');


var makeList = function(){
  var userList = [];
  for(var i = 0; i < 20; i++){
  userList.push(user());

}
return userList;
}



module.exports = makeList;
