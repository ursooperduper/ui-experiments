'use strict';

/**
 * @ngdoc function
 * @name uiExperimentsApp.controller:TrelloController
 * @description
 * # TrelloController
 * Controller of the uiExperimentsApp
 */
angular.module('uiExperimentsApp')
  .controller('TrelloController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .directive('skTrelloAddList', function() {
    return{
      restrict: 'E',
      replace: true,
      templateUrl: 'views/trello/partials/sk-trello-add-list.html'
    };
  })
  .directive('skTrelloList', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/trello/partials/sk-trello-list.html'
    };
  })
  .directive('skTrelloCard', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/trello/partials/sk-trello-card.html'
    };
  })
  .controller('ListController', function($scope) {
    $scope.showAddListForm = function() {
      $scope.addListButton = false;
      $scope.addListForm = true;
    };

    $scope.hideAddListForm = function() {
      $scope.addListButton = true;
      $scope.addListForm = false;
    };

    $scope.lists = [];
    $scope.list = null;
    $scope.buttonText = 'Add list...';
    $scope.trelloList = true;
    $scope.hideAddListForm();

    $scope.addList = function() {
      if ($scope.list !== null) {
        $scope.newList = {
          id: $scope.lists.length,
          name: $scope.list.name
        };
        $scope.lists.push($scope.newList);
        $scope.list.name = null;
        $scope.hideAddListForm();
      }
    };
  })
  .controller('CardController', function($scope) {
    $scope.addCard = function() {
      console.log('Add a card');
    };
  });
