var app = angular.module("greenApp", []);

app.controller("GreenController", ["$scope", "$http", function($scope, $http) {
  $scope.usersList = [];

  $http.get("/users").then(function(response) {
    $scope.usersList = [];
    $scope.usersList = response.data;
  });
}]);
