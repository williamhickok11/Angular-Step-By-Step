app.controller("SongDetailCtrl", 
  ["$scope", 
  "$routeParams", 
  "$firebaseArray",

  function($scope, $routeParams, $firebaseArray) {
    $scope.selectedSong = {name:"test"};
    $scope.songId = $routeParams.songId;

    var ref = new Firebase("https://nss-demo-instructor.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

    $scope.songs.$loaded()
      .then(function() {
        $scope.selectedSong = $scope.songs.$getRecord($scope.songId);
      })
      .catch(function(error) {
        console.log("Error:", error);
      });

  }
]);