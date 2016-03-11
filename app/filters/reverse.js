"use strict";

MusicHistory.filter("reverse", function() {
  return function(input) {
    if (input !== null) {
      return input.split("").reverse().join("");
    }
  };
});