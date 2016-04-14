var app = angular.module('myApp', []);

app.controller('MainController', ['$scope','$http', function($scope, $http){
  $scope.people = {};
  $scope.peoples = [];

///TO DO troubleshoot the lack of response getting returned
/////getUsers is ng-click on button
$scope.getUsers = function(){
    $http.get('/create').then(function(response) {
      console.log(response);
      $scope.peoples = response.data

////////////////We were unsure if this section needed to be included. Had commented out to try to troubleshoot/////////////////
    // if(response.status !== 200){
    //   console.log('Error getting');
    // }

    });
  };

  }



}]);
