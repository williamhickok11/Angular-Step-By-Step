app.controller("TodoCtrl", function($scope, $q) {

  $scope.title = "Welcome to Angular";
  $scope.macaroni = "";
  $scope.newTodo = "";
  $scope.theTodo = "";

  $scope.todos = [
    { name: "mow the lawn", complete: "incomplete" },
    { name: "cut the grass", complete: "complete" },
    { name: "kill the ants", complete: "incomplete" },
    { name: "trim the weeds", complete: "complete" }
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
        // $scope.todos = promiseResolutionData;
      },
      function(error) {
        console.log("error", error);
      });

});


















