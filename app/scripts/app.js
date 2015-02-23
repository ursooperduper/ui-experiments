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
  // .run(function ($rootScope) {
  //   document.addEventListener('keyup', function(e) {
  //       if (e.keyCode === 27) {
  //         $rootScope.$broadcast('escapePressed', e.target);
  //       }
  //   });
  //   document.addEventListener('click', function(e) {
  //       $rootScope.$broadcast('documentClicked', e.target);
  //   });
  // });
