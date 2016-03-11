"use strict";

MusicHistory.controller("SongDetailCtrl", 
  ["$scope", 
  "$routeParams", 
  "$http", 
  
  function($scope, $routeParams, $http) {

    $http.get("./data/songs.json")
      .success(function (songObject) {
        $scope.songs = songObject.songs;

        $scope.selectedSong = $scope.songs.filter(function (s) {
          return s.id === parseInt($routeParams.songId, 10);
        })[0];
      });
  }
]);
