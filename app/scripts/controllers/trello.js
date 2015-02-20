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

    $scope.lists = [];
    $scope.list = null;
    $scope.buttonText = 'Add list...';
    $scope.showList = true;
    $scope.hideAddListForm();

    $scope.addList = function() {
      if ($scope.list !== null) {
        $scope.newList = {
          id: $scope.lists.length,
          name: $scope.list.name
        };
        $scope.lists.push($scope.newList);
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
      console.log('Add a card', $scope.list.id);
      if ($scope.card !== null) {
        $scope.newCard = {
          id: $scope.list.cards.length,
          title: $scope.card.title
        };
        $scope.list.cards.push($scope.newCard);
        $scope.card = null;
      }
    };
  });
