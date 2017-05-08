angular.module('myApp', ['ui.router']).config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.when('', '/');
          $stateProvider
          .state('home', {
            url: '/',
            templateUrl: "./views/main.html",
            controller: 'mainCtrl'
          })

})

// .filter('startFrom', function() {
//             return function(data, start) {
//               return data.slice(start);
//             }
//           })
