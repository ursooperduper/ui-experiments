(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name app
   * @description
   * # app
   *
   * Main module of the application.
   */

  function routeConfig($routeProvider) {
   $routeProvider
     .when('/', {
       templateUrl: 'about/about.html',
       controller: 'AboutController',
       controllerAs: 'vma'
     })
     .when('/trello', {
       templateUrl: 'trello/index.html',
       controller: 'ListController',
       controllerAs: 'vml'
     })
     .otherwise({
       redirectTo: '/'
     });
   }

  angular
    .module('app', [
      'ngAnimate',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'dndLists'
    ])
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];
})();
