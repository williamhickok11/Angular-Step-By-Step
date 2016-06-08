"use strict";
// Getting the songs data
MusicHistory.factory("songFactory", ($q, $http) =>
  () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get("https://blinding-inferno-201.firebaseio.com/songList.json")
        .success(
          (songCollection) => resolve(songCollection),
          error => reject(error)
        )
    )
);
