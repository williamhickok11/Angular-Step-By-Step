"use strict";

MusicHistory.controller("SongCtrl", [
    "$scope",
    "$http",

  function($scope, $http) {
    $scope.songSearchText = {name: "", artist: "", album: ""};
    $scope.query = "";

    $http.get("./data/songs.json")
      .success(function (songObject) {
        $scope.songs = songObject.songs;
      });

  }]
);
