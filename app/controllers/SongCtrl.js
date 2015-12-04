app.controller("SongCtrl", 
  ["$firebaseArray",
  function($firebaseArray) {

    var ref = new Firebase("https://nss-demo-instructor.firebaseio.com/songs");
    this.songs = $firebaseArray(ref);

  }
]);
