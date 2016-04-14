//this is our route that creates users 20 times.

var createUser=require('./createUser');

function getUser() {
  var arr = [];
for (var i = 0; i < 20; i++) {
  arr.push(createUser());
}
console.log(arr);
return arr;

}

module.exports = getUser;
