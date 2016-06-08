"use strict";
// Getting the songs data
MusicHistory.factory("moviesFactory", function ($q, $http) {

let getMovies = {};

  getMovies.searchOMDBMovies = (movie) => {
    movie = movie.replace(/ /g, '+');
    return $q((resolve, reject) => // Return a promise for our async XHR
      $http.get(`http://www.omdbapi.com/?t=${movie}`)
        .success(
          movieCollection => {
              resolve(movieCollection);
              console.log("SUCCESS", movieCollection);
          },
          error => reject(error)
        )
    )
  }

  getMovies.postMovie = (movie) => {
    return $q((resolve, reject) => {
      $http.post("https://blinding-inferno-201.firebaseio.com/movies/.json", {movie})
    .success(
      movie => {
        resolve(movie);
        console.log("success", movie);
      },
      error => reject(error)
      )
    });
  }
  return getMovies;
});