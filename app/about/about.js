'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the app
 */
angular.module('uiApp')
  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
