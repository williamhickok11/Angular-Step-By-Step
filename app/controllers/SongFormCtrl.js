app.controller("SongFormCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {

    var ref = new Firebase("https://nss-demo-instructor.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);
    $scope.newSong = {};

    $scope.addSong = function() {
      $scope.songs.$add({
        artist: $scope.newSong.artist,
        name: $scope.newSong.name,
        album: {
          name: $scope.newSong.albumName,
          year: $scope.newSong.albumYear
        }
      });
    };
  }
]);