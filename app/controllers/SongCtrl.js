"use strict";

MusicHistory.controller("SongCtrl", [
    "$scope",
    "$http",
    "song-storage",

  function($scope, $http, songStorage) {
    $scope.songSearchText = {name: "", artist: "", album: ""};
    $scope.query = "";
    $scope.songs = [];

    songStorage().then(
      function (songCollection) {
        Object.keys(songCollection).forEach(function (key) {
          songCollection[key].id = key;
          $scope.songs.push(songCollection[key]);
        });
      },
      function () {

      }
    );

  }]
);
