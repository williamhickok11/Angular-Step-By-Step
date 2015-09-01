app.controller("SongCtrl", 
  ["$scope", 
   "$firebaseArray", 
  function($scope, $firebaseArray) {

    var ref = new Firebase("https://nss-demo-instructor.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

  }
]);
