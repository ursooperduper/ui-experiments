(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:ListController
   * @description
   * # ListController
   * Manages everything to do with Trello-style lists.
   */
   function ListController() {
     // vm stands for ViewModel
     var vm = this;

     //Initializers
     vm.addListButton = true;
     vm.addListForm = false;
     vm.addListButtonLabel = 'Add List...';

     // Handles the display of the add list button or form
     vm.toggleAddListForm = function() {
       vm.addListButton = !vm.addListButton;
       vm.addListForm = !vm.addListForm;
     };

     // Base model that will contain the list & card data
     vm.models = {
       selected: null,
       lists: {}
     };

     // Initializers
     // Use a number for the object name to keep the correct list order
     var numLists = 0;
     vm.list = null;

     // Adds a new list to the board
     vm.addList = function() {
       if (vm.list !== null) {
         numLists += 1;

         // Add a new list object to the model
         vm.models.lists[numLists] = {
           label : vm.list.name,
           cards : []
         };

         // Cleanup
         vm.list = null;
         vm.toggleAddListForm();
       }
     };
   }

   angular.module('app')
    .controller('ListController', ListController);

})();
