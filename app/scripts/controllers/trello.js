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

    // Handlers for showing/hiding the button & add list form
    $scope.showAddListForm = function() {
      $scope.addListButton = false;
      $scope.addListForm = true;
    };
    $scope.hideAddListForm = function() {
      $scope.addListButton = true;
      $scope.addListForm = false;
    };

    // Base model that will contain the list & card data
    $scope.models = {
      selected: null,
      lists: {}
    };


    // Make sure the add list form is hidden at the start
    $scope.hideAddListForm();

    // Initializers
    // Use a number for the object name to keep the correct list order
    var numLists = 0;
    $scope.list = null;

    // Adds a new list to the board
    $scope.addList = function() {
      if ($scope.list !== null) {
        numLists += 1;

        // Add a new list object to the model
        $scope.models.lists[numLists] = {
          label : $scope.list.name,
          cards : []
        };

        $scope.list = null;
        $scope.hideAddListForm();
      }
    };
  })
  .controller('CardController', function($scope) {

    // Initializers
    $scope.list.cards = [];
    $scope.card = null;

    // Handlers for showing/hiding the button & add card form
    $scope.showAddCardForm = function() {
      $scope.addCardButton = false;
      $scope.addCardForm = true;
    };
    $scope.hideAddCardForm = function() {
      $scope.addCardButton = true;
      $scope.addCardForm = false;
    };

    // The add card form should be hidden at first
    $scope.hideAddCardForm();

    // Adds a new card to a list
    $scope.addCard = function() {
      if ($scope.card !== null) {
        // Add the card to the appropriate list
        $scope.list.cards.push({label: $scope.card.title});

        // Cleanup, reset the card
        $scope.card = null;
      }
    };
  });
