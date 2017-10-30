angular.module('myApp').controller('mainCtrl', function($scope, mainService) {

    $scope.postData = function( data ) {
      console.log("ctrl", data)
      mainService.postData( data )
      $scope.data.push(data)

    }


    $scope.getData = function() {
      mainService.getData().then(function(results){
        $scope.data = results.data
        // console.log("cart", results.data)
      })
    }
    $scope.getData()

    $scope.deleteText = function(id, i) {
      console.log("delete", id , i)
      var removedItem = $scope.data.splice(i, 1)
      mainService.deleteText(id).then(function() {
      //  $scope.data.splice(i, 1)
    }, function(err) {
      $scope.data.splice(i, 0, removedItem[0]);
    });


    }

    $scope.changeData = function( item, i) {
      console.log(item, i)
      mainService.changeData(item)
      // console.log(item)
      $scope.data[i].task = item.newtask
    }

    $scope.showmenu = false;
    $scope.pageSize = 5;
    $scope.currentPage = 1;

})
