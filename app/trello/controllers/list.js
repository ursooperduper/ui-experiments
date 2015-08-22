(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name uiApp.controller:ListController
   * @description
   * # ListController
   * Manages everything to do with Trello-style lists.
   */
  function ListController($scope) {

    //Initializers
    $scope.oldListLabel   = null;
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

     // Use a number for the object name to keep the correct list order
    $scope.numLists = 0;
    $scope.numCards = 0;

     // Base model that will contain the list & card data
    $scope.models = {
      selected : null,
      lists    : {}
    };

     // Adds a new list to the board
    $scope.addList = function() {
      if ($scope.list !== null) {
        $scope.numLists += 1;

        // Add a new list object to the model
        $scope.models.lists[$scope.numLists] = {
          id    : $scope.numLists,
          title : $scope.list.name,
          cards : []
        };

        // Create show/hide variables
        $scope.listTitle[$scope.numLists]      = true;
        $scope.listMenu[$scope.numLists]       = false;
        $scope.listMenuToggle[$scope.numLists] = true;
        $scope.editListForm[$scope.numLists]   = false;
        $scope.addCardButton[$scope.numLists]  = true;
        $scope.addCardForm[$scope.numLists]    = false;

        // Cleanup
        $scope.list = null;
        $scope.toggleAddListForm();
      }
    };

    // Trello has an archive function, for this demo, we'll delete instead
    $scope.archiveList = function(id) {
      // $scope.numLists -= 1;
      delete $scope.models.lists[id];
    };


  }

  angular.module('uiApp')
    .controller('ListController', ListController);
})();
