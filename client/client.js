var app = angular.module('blueApp', []);

app.controller('BlueController', ['$scope', '$http', function($scope, $http){
    $http.get('/newuser').then(function(response){
        $scope.userList = [];
        $scope.userList = response.data;
      console.log(response);
    });
}])
