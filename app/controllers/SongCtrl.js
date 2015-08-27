app.controller("SongCtrl", 
  ["$scope", 
   "simple-storage", 
   "song-storage", 
  function($scope, simple_storage, song_storage) {

  $scope.songs = [];
  $scope.songSearchText = {name: "", artist: "", album: ""};
  $scope.newSong = {name: "", artist: "", album: ""};

  simple_storage.addJunk("garbage", { a: 1, b: 2});

  song_storage.then(
    function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
      $scope.songs = promiseResolutionData;
    },
    function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });

  }
]);
