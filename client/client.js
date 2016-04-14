var app = angular.module('myApp', []);

app.controller('MainController', ['$scope','$http', function($scope, $http){
  $scope.people = {};
  $scope.peoples = [];

  ///TO DO troubleshoot the lack of response getting returned
  /////getUsers is ng-click on button
  $scope.getUsers = function(){
    console.log('Getting all users');
    $http.get('/people').then(function(response) {
      console.log(response);
      $scope.peoples = response.data;
    });
  };

}]);
