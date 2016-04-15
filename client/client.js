var app = angular.module('peopleApp', []);

app.controller('PeopleController', ['$http', function($http){
  // client side code
  var controller = this;
  controller.users = [];

  controller.getPeople = function(){
    $http.get('/users').then(function(response){
    console.log(controller.users);
    controller.updateUsers();
    })
  }

  controller.updateUsers = function(){
    $http.get('/all').then(function(response){
    controller.users = response.data;
    })
  }


  controller.removeUser = function(user) {
    userId = user._id;
    $http.delete('/remove/' +userId).then(function(response){
      console.log('deleted', user);
      controller.getPeople();
    })
  }
}]);
