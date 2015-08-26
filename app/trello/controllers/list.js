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
    $scope.oldListLabel   = null;
    $scope.oldCardTitle   = null;
    $scope.listTitle      = {};
    $scope.editListForm   = {};
    $scope.listMenu       = {};
    $scope.listMenuToggle = {};
    $scope.addCardButton  = {};
    $scope.addCardForm    = {};
    $scope.cardItem       = {};
    $scope.editCardToggle = {};
    $scope.editCardForm   = {};
    $scope.list           = null;
    $scope.card           = null;
    $scope.addListButton  = true;
    $scope.addListForm    = false;

    // Get the model from the ListService.
    // All list and card data is stored in this model
    $scope.model = ListService.listAll();

    $scope.addList = function() {
      if ($scope.list.name !== null) {
        var newListNum = ListService.newList($scope.list.name);

        // ??? Move this to a function in the add directive?
        // Create show/hide variables
        $scope.listTitle[newListNum]      = true;
        $scope.listMenu[newListNum]       = false;
        $scope.listMenuToggle[newListNum] = true;
        $scope.editListForm[newListNum]   = false;
        $scope.addCardButton[newListNum]  = true;
        $scope.addCardForm[newListNum]    = false;

        // Cleanup
        $scope.list = null;
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
      var cardTitle = this.card.title;

      if (this.card !== null) {
        var newCard = ListService.newCard(listId, cardTitle);
        // Set up show/hide for the edit functions
        // ?? Move this to a function in directive?
        $scope.editCardToggle[newCard] = true;
        $scope.cardItem[newCard]       = true;
        $scope.editCardForm[newCard]   = false;

        // Cleanup, reset the card
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
