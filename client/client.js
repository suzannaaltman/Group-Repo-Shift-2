var app = angular.module('myApp', []);

app.controller('MainController', ['$scope','$http', function($scope, $http){
  $scope.people = {};
  $scope.peoples = [];

  var getAssign = function(){
    return $http.get('/create').then(function(response){
      if(response.status !== 200){
        console.log('Error getting');
      }
      $scope.people = {};
      $scope.peoples  = response.data;
      return response.data;
    });
  };








}]);
