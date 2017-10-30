angular.module('myApp').directive('newTask', function() {
  return {
    restrict: 'E',
    template: `
    <div class="newTask" style:" margin: 0;">
    <input class="data" name="task" ng-model="text" placeholder="Enter Task">

    <button class="submit" ng-click="postData( {text:text} )">Create Task</button>
    </div> `
}


})








//
// document.getElementById("createbutton").onclick = function() {myFunction()};
//
// function myFunction() {
//     document.getElementById("newTasks").classList.toggle("show");
// }
