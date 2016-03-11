"use strict";

MusicHistory.controller("SongDetailCtrl", 
  ["$scope", 
  "$routeParams", 
  "$http", 
  "$location", 
  "song-storage", 
  
  function($scope, $routeParams, $http, $location, songStorage) {

    $scope.songs = [];
    $scope.selectedSong = {};

    songStorage().then(
      function (songCollection) {
        Object.keys(songCollection).forEach(function (key) {
          songCollection[key].id = key;
          $scope.songs.push(songCollection[key]);
        });

        $scope.selectedSong = $scope.songs.filter(song => {
          return song.id === $routeParams.songId;
        })[0];
      },
      function () {

      }
    );

    $scope.deleteSong = function () {
      $http
        .delete(`https://nss-demo-instructor.firebaseio.com/songs/${$routeParams.songId}.json`)
        .then(() => $location.url("/"))
    }

  }
]);
