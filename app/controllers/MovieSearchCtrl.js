"use strict";

MusicHistory.controller("MovieSearchCtrl", [
  "$scope",
  "$location",
  "moviesFactory",

  ($scope, $location, getMovies) => {

    $scope.searchResults = [];
    let movieToAdd = {
      poster : "",
      title : ""
    };

    $scope.searchMovies = () => {
      let movie = $scope.movieToSearch;

      console.log("movie", movie);

      getMovies.searchOMDBMovies(movie)
      .then(
        movieData => {
          if (movieData) {
            console.log("movieData", movieData);
            movieToAdd.poster = movieData.Poster;
            movieToAdd.title = movieData.Title;
            $scope.searchResults[0] = movieToAdd;
            console.log("movieToAdd", movieToAdd);
            console.log("searchResults", $scope.searchResults);
          };
        })
    }

    $scope.addToWatchlist = () => {
      getMovies.postMovie($scope.searchResults[0])
    }

  }
]);
