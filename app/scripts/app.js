'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'dndLists'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainController'
      })
      .when('/trello', {
        templateUrl: 'views/trello/index.html',
        controller: 'TrelloController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
