'use strict';

/**
 * @ngdoc function
 * @name app.controller:TrelloController
 * @description
 * # TrelloController
 * Controller of the app
 */
angular.module('app')
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

    //Initializers
    $scope.addListButton = true;
    $scope.addListForm = false;

    // Handles the display of the add list button or form
    $scope.toggleAddListForm = function() {
      $scope.addListButton = !$scope.addListButton;
      $scope.addListForm = !$scope.addListForm;
    };

    // $rootScope.$on('documentClicked', _close);
    // $rootScope.$on('escapePressed', _close);

    // Base model that will contain the list & card data
    $scope.models = {
      selected: null,
      lists: {}
    };

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

        // Cleanup
        $scope.list = null;
        $scope.toggleAddListForm();
      }
    };
  })
  .controller('CardController', function($scope) {

    // Initializers
    $scope.list.cards = [];
    $scope.card = null;
    $scope.addCardButton = true;
    $scope.addCardForm = false;

    // Handles the display of the add card button or form
    $scope.toggleAddCardForm = function() {
      $scope.addCardButton = !$scope.addCardButton;
      $scope.addCardForm = !$scope.addCardForm;
    };

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
