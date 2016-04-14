var app = angular.module("yellowApp", []);

app.controller("YellowController", ["$scope", "$http", function($scope, $http) {
  $scope.usersList = [];



  $scope.getUsers = function() {
    $http.get("/users").then(function(response) {
     console.log('created users');
    }); //  $http.get
    $scope.updateUsers();
  };  //  $scope.getUsers


  $scope.updateUsers = function() {
    $http.get("/all").then(function(response) {
      $scope.usersList = response.data;
    });
  };

  $scope.deleteUser = function(user) {
    // console.log("Hello", user._id);
    // This will delete the user from the database, but not from the DOM -> use Array.splice()
    $http.delete("/deleteUsers/" + user._id).then(function(response) {
      console.log("Deleted");
    $scope.updateUsers();
    }); //  $http.delete
  };  //  $scope.deleteUser

  $scope.updateUsers();

}]); // controller
