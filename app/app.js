(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name uiApp
   * @description
   * # uiApp
   *
   * Main module of the application.
   */

  function routeConfig($routeProvider) {
   $routeProvider
     .when('/about', {
       templateUrl: 'about/about.html',
       controller: 'AboutController'
     })
     .when('/trello', {
       templateUrl: 'trello/index.html',
       controller: 'ListController'
     })
     .otherwise({
       redirectTo: '/'
     });
   }

  angular
    .module('uiApp', [
      'ngAnimate',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'dndLists',
      'offClick'
    ])
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];
})();
