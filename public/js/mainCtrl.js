angular.module('myApp').controller('mainCtrl', function($scope, mainService) {

    $scope.postData = function( data ) {
      mainService.postData( data )
    }
    $scope.getData = function() {
      mainService.getData().then(function(results){
        $scope.data = results.data
      })
    }
    $scope.getData()

    $scope.deleteText = function(id) {
      mainService.deleteText(id)
    }

    $scope.changeData = function( item ) {
      mainService.changeData( item )
    }
})
