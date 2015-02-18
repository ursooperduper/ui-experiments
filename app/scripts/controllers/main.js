'use strict';

/**
 * @ngdoc function
 * @name uiExperimentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiExperimentsApp
 */
angular.module('uiExperimentsApp')
  .controller('MainController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
