"use strict";

MusicHistory.controller("notdollsCtrl", [
  "$scope",
  "$http",

  ($scope, $http) => {

    $scope.figurines = [];

    $http.get('http://10.0.0.33:8080/api/Inventory')
    .success(i => console.log("Inventory", i))
    }
]);
