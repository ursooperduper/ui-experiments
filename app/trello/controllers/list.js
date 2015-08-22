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
  }

  angular.module('uiApp')
    .controller('ListController', ListController);
})();
