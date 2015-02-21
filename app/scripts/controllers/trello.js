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
  .directive('skAddList', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/trello/partials/sk-add-list.html'
    };
  })
  .directive('skList', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/trello/partials/sk-list.html'
    };
  })
  .directive('skCard', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/trello/partials/sk-card.html'
    };
  })
  .directive('skAddCard', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/trello/partials/sk-add-card.html'
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
    $scope.models = {
      selected: null,
      lists: {}
    };
    $scope.list = null;
    $scope.buttonText = 'Add list...';
    $scope.showList = true;
    $scope.hideAddListForm();
    var numLists = 0;

    $scope.addList = function() {
      if ($scope.list !== null) {
        numLists += 1;
        $scope.models.lists[numLists] = {
          label : $scope.list.name,
          cards : []
        };
        //$scope.models.lists[$scope.list.name] = [];
        $scope.list = null;
        $scope.hideAddListForm();
      }
    };
  })
  .controller('CardController', function($scope) {
    $scope.list.cards = [];
    $scope.card = null;
    $scope.showCard = true;

    $scope.showAddCardForm = function() {
      $scope.addCardButton = false;
      $scope.addCardForm = true;
    };

    $scope.hideAddCardForm = function() {
      $scope.addCardButton = true;
      $scope.addCardForm = false;
    };

    $scope.hideAddCardForm();

    $scope.addCard = function() {
      if ($scope.card !== null) {
        $scope.list.cards.push({label: $scope.card.title});
        $scope.card = null;
      }
    };
  });
