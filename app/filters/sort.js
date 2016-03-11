"use strict";

MusicHistory.filter("sort", function() {
  return function(input) {
    if (input !== null) {
      return input.split("").sort().join("");
    }
  };
});