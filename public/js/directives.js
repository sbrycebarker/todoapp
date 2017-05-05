angular.module('myApp').directive('newTask', function() {
  return {
    restrict: 'E',
    template: `
    <div class="newTask">
    <input class="data" type="text" name="text" ng-model="text" placeholder="Enter Task">

    <button class="submit" ng-click="postData( { text:text} )">Create Task</button>
    </div> `
}


})








//
// document.getElementById("createbutton").onclick = function() {myFunction()};
//
// function myFunction() {
//     document.getElementById("newTasks").classList.toggle("show");
// }
