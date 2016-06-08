"use strict";

/* exported MusicHistory */

let MusicHistory = angular.module("SongApp", ["ngRoute", "firebase"])
  .constant('firebaseURL', "https://blinding-inferno-201.firebaseio.com/");

/*
  Define a promise for any view that needs an authenticated user
  before it will resolve (see below)
 */
let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if (authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

/*
  Set up routes for Music History app
 */
MusicHistory.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/song-list.html",
        controller: "SongCtrl",
        resolve: { isAuth }
      }).
      when("/songs/list", {
        templateUrl: "partials/song-list.html",
        controller: "SongCtrl",
        resolve: { isAuth }
      }).
      when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/logout", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/songs/new", {
        templateUrl: "partials/song-form.html",
        controller: "SongFormCtrl",
        resolve: { isAuth }
      }).
      when("/songs/:songId", {
        templateUrl: "partials/song-brief.html",
        controller: "SongDetailCtrl",
        resolve: { isAuth }
      }).
      when("/movie/search", {
        templateUrl: "partials/search-movie.html",
        controller: "MovieSearchCtrl"
      }).
      when("/notdolls", {
        templateUrl: "partials/notdolls.html",
        controller: "notdollsCtrl",
        resolve: { isAuth }
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);

/*
  When the application first loads, redirect the user to the login
  form if there is no authentication
 */
MusicHistory.run([
  "$location",

  ($location) => {
    let musicHistoryRef = new Firebase("https://blinding-inferno-201.firebaseio.com/");

    musicHistoryRef.onAuth(authData => {
      if (!authData) {
        $location.path("/login");
      }
    });
  }
]);
