var app = angular.module("greenApp", []);

app.controller("GreenController", ["$scope", "$http", function($scope, $http) {
  $scope.usersList = [];

  $scope.getInfo = function(){
  $http.get("/all").then(function(response) {
    $scope.usersList = response.data;
  });
};

}]);
