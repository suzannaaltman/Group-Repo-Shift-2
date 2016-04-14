var app = angular.module("yellowApp", []);

app.controller("YellowController", ["$scope", "$http", function($scope, $http) {
  $scope.usersList = [];
  $scope.getUsers = function() {
    $http.get("/users").then(function(response) {
      $scope.usersList = [];
      $scope.usersList = response.data;
    }); //  $http.get
  };  //  $scope.getUsers

  $scope.deleteUser = function(user) {
    // console.log("Hello", user._id);
    // This will delete the user from the database, but not from the DOM -> use Array.splice()
    $http.delete("/deleteUsers/" + user._id).then(function(response) {
      console.log("Deleted");
    }); //  $http.delete
  };  //  $scope.deleteUser
}]);
