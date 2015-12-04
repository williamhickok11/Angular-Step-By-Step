app.controller("SongDetailCtrl", 
  ["$routeParams",
  "$firebaseArray",

  function($routeParams, $firebaseArray) {
    this.selectedSong = {name:"test"};
    this.songId = $routeParams.songId;

    var ref = new Firebase("https://nss-demo-instructor.firebaseio.com/songs");
    this.songs = $firebaseArray(ref);

    this.songs.$loaded()
      .then(function() {
        this.selectedSong = this.songs.$getRecord(this.songId);
      }.bind(this))
      .catch(function(error) {
        console.log("Error:", error);
      });

  }
]);



