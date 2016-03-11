"use strict";

MusicHistory.controller("SongFormCtrl", 
[
  "$scope", 
  "$location", 
  "$http", 

  function($scope, $location, $http) {
    
    $scope.newSong = {
      name: "",
      albumName: "",
      albumYear: "",
      artist: ""
    };

    $scope.addSong = function () {
      $http.post(
        "https://nss-demo-instructor.firebaseio.com/songs.json",
        JSON.stringify({
          name: $scope.newSong.name,
          album: {
            name: $scope.newSong.albumName,
            year: $scope.newSong.albumYear,
          },
          artist: $scope.newSong.artist
        })
      ).then(function successCallback(response) {
        $location.url("/songs/");
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      })
    }

}]);







