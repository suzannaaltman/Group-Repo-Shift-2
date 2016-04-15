var app = angular.module('peopleApp', []);

app.controller('PeopleController', ['$scope', '$http', function($scope, $http){
  // client side code
  $scope.users = [];

  $scope.getPeople = function(){
    $http.get('/users').then(function(response){
    console.log($scope.users);
    $scope.updateUsers();
    })
  }

  $scope.updateUsers = function(){
    $http.get('/all').then(function(response){
    $scope.users = response.data;
    })
  }


  $scope.removeUser = function(user) {
    userId = user._id;
    $http.delete('/remove/' +userId).then(function(response){
        console.log('deleted', user);
        $scope.getPeople();
    })
  }
}]);
