"use strict";

MusicHistory.filter("capitalize", function() {
  return function(input) {
    if (input !== null) {
      return input.substring(0,1).toUpperCase()+input.substring(1);  
    }
  };
});