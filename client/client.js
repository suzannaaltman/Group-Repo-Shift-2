var app = angular.module('blueApp', []);

app.controller('BlueController', ['$scope', '$http', function($scope, $http){
  $scope.userList = [];

  $scope.getPeople = function() {
    $http.get('/people').then(function(response){
      $scope.userList = response.data;

      console.log(response);
    })
  }
}])
