app.filter('upercase', function() {
  return function(input, scope) {
    if (input !== null) {
      return input.toUpperCase();
    }
  }
});