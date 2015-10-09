(function() {
  'use strict';
  /**
   * @ngdoc function
   * @name uiApp.controller:ListController
   * @description
   * # ListController
   * Manages everything to do with Trello-style lists.
   */
  function ListController($scope, ListService) {
    //Initializers

    $scope.editCardToggle = {};
    $scope.cardItem       = {};
    $scope.editCardForm   = {};
    $scope.list           = null;
    $scope.card           = null;

    // Get the model from the ListService.
    // All list and card data is stored in the model
    $scope.model = ListService.listAll();

    $scope.addList = function() {
      if ($scope.list.name !== null) {
        var newListNum = ListService.newList($scope.list.name);
        // Cleanup
        $scope.list = null;
        $scope.toggleListUI(newListNum);
        $scope.toggleAddListForm();
      }
    };

    $scope.editList = function(listId, action) {
      ListService.editList(listId, action);
    };

    $scope.archiveList = function(listId) {
      ListService.deleteList(listId);
    };

    $scope.holdOldListTitle = function(listId) {
      ListService.setOldListTitle(listId);
    };

    $scope.addCard = function(listId) {
      if (this.card !== null) {
        var cardTitle = this.card.title;
        var newCard = ListService.newCard(listId, cardTitle);
        // Cleanup, reset the card
        this.toggleCardUI(newCard);
        this.card = null;
      }
    };

    $scope.editCard = function(listId, cardId, action, newTitle) {
      ListService.editCard(listId, cardId, action, newTitle);
    };

    $scope.holdOldCardTitle = function(listId, cardPos) {
      ListService.setOldCardTitle(listId, cardPos);
    };
  }

  angular.module('uiApp')
    .controller('ListController', ListController);
})();
