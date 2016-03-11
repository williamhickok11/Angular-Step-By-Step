"use strict";

/* exported MusicHistory */

let MusicHistory = angular.module("SongApp", ["ngRoute"]);

MusicHistory.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/song-list.html",
        controller: "SongCtrl"
      }).
      when("/songs/:songId", {
        templateUrl: "partials/song-detail.html",
        controller: "SongDetailCtrl"
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);









