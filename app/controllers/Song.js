app.controller("SongCtrl", function($scope) {

  $scope.newSong = {
    name: "",
    artist: "",
    album: ""
  };

  $scope.songs = [
    {
      name: "Sharp Dressed Man", 
      artist: "ZZ Top",
      album: "Eliminator"
    },
    {
      name: "Breakfast in America", 
      artist: "Supertramp",
      album: "Breakfast in America"
    },
    {
      name: "Carry on My Wayward Son", 
      artist: "Kansas",
      album: "Overture"
    }
  ];

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  $scope.addSong = function() {
    $scope.songs.push({
      name: $scope.newSong.name,
      artist: $scope.newSong.artist,
      album: $scope.newSong.album
    });

    $scope.newSong = {
      name: "",
      artist: "",
      album: ""
    };
  };


});






