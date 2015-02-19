'use strict';

/**
 * @ngdoc overview
 * @name uiExperimentsApp
 * @description
 * # uiExperimentsApp
 *
 * Main module of the application.
 */
angular
  .module('uiExperimentsApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
