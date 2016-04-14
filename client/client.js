var app = angular.module('blueApp', []);

app.controller('BlueController', ['$scope', '$http', function($scope, $http){
  $scope.user = {};
  $scope.userList = [];

  $scope.getPeople = function() {
    $http.get('/people').then(function(response){
      console.log(response.data);
      $scope.userList = response.data;
      if (response.status !== 200){
        console.log('Error on getting data')
      }
      $scope.user = {};
      $scope.userList = response.data;
      return response.data;

      console.log(response.data);

    })
  }
}])
