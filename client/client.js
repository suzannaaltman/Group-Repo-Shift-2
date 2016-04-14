var app = angular.module("greenApp", []);

app.controller("GreenController", ["$scope", "$http", function($scope, $http) {
  $scope.usersList = [];



  $scope.getInfo = function(){
    //activate thing
    console.log('Stuff happens');
  $http.get("/all").then(function(response) {
    console.log(response.data);
    $scope.usersList = response.data;
  });
};


}]);
