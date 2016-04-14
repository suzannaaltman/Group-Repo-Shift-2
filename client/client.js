var app = angular.module('peopleApp', []);


app.controller('PeopleController', ['$scope', '$http', function($scope, $http){
  // client side code 
  $scope.users = [];

  $scope.getPeople = function(){
    $http.get('/all').then(function(response){
      $scope.users = response.data;
    })
  }





}]);
