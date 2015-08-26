app.controller("TodoCtrl", function($scope, $q) {

  $scope.title = "Welcome to Angular";
  $scope.macaroni = "";
  $scope.newTodo = "";

  $scope.todos = [
    { name: "Mow the lawn", complete: false },
    { name: "Cut the grass", complete: false },
    { name: "Trim the weeds", complete: false }
  ];

  $scope.killTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    if (todoIndex >= 0) {
      $scope.todos.splice(todoIndex, 1);
    }
  };

  $scope.addTodo = function() {
    $scope.todos.push({name: $scope.newTodo, complete: false});
    $scope.newTodo = "";
  };

  function getTodoList() {
    // perform some asynchronous operation, resolve or reject the promise when appropriate.
    return $q(function(resolve, reject) {

      $.ajax({
        url: "./data/todos.json"
      })
      .done(function(objectFromJSONFile) {
        resolve(objectFromJSONFile.todos);
      })
      .fail(function(xhr, status, error) {
        reject(error);
      });

    });
  }

  getTodoList()
    .then(
      function(promiseResolutionData) {
        $scope.todos = promiseResolutionData;
      },
      function(error) {
        console.log("error", error);
      });

});
