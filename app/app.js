"use strict";

/* exported MusicHistory */

let MusicHistory = angular.module("SongApp", ["ngRoute"]);

MusicHistory.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/song-list.html",
        controller: "SongCtrl"
      }).
      when("/songs/new", {
        templateUrl: "partials/song-form.html",
        controller: "SongFormCtrl"
      }).
      when("/songs/:songId", {
        templateUrl: "partials/song-brief.html",
        controller: "SongDetailCtrl"
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);









