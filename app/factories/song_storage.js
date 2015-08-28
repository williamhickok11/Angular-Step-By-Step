app.factory("song-storage", function($q, $http) {

  function getSongList() {

    // Return a promise for our async XHR
    return $q(function(resolve, reject) {
      $http.get('./data/songs.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songs);
        },function(error) {
          reject(error);
        }
      );
    });
  }

  return getSongList();
});