var app = angular.module("greenApp", []);

app.controller("GreenController", ["$scope", "$http", function($scope, $http) {
  $scope.usersList = [];
  $scope.getInfo = function(){
    // console.log("click");
    $http.get("/create").then(function(response) {
    console.log('data for /create',response.data);
    $scope.usersList = [];
    $scope.usersList = response.data;
      });
   };
}])
