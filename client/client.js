var app = angular.module('peopleApp', []);


app.controller('PeopleController', ['$scope', '$http', function($scope, $http){
  // client side code
  $scope.users = [];

  $scope.getPeople = function(){
    $http.get('/all').then(function(response){
      $scope.users = response.data;
      console.log($scope.users);
    })

  }
  $scope.removeUser = function(user){
    userId = user._id;
    console.log(userId);
    $http.delete('/remove/' +userId).then(function(response){
        console.log('deleted', user);
        $scope.getPeople();
        //TODO: set up endpoint
    })
  }





}]);
