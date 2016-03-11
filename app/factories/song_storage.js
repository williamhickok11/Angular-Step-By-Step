"use strict";

MusicHistory.factory("song-storage", function($q, $http) {
  
  function getSongList() {

    // Return a promise for our async XHR
    return $q(function(resolve, reject) {
      $http.get('https://nss-demo-instructor.firebaseio.com/songs.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile);
        },function(error) {
          reject(error);
        }
      );
    });
  }

  return getSongList;
});










