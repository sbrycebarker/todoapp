angular.module('myApp').controller('mainCtrl', function($scope, mainService) {

    $scope.postData = function( data ) {
      mainService.postData( data )
      location.reload(true);
    }


    $scope.getData = function() {
      mainService.getData().then(function(results){
        $scope.data = results.data
        console.log(results.data[17])

      })
    }


    $scope.getData()

    $scope.deleteText = function(id) {
      mainService.deleteText(id)
      location.reload(true);

    }

    $scope.changeData = function( item ) {
      mainService.changeData( item )
      location.reload(true);

    }

    $scope.showmenu = false;

})
