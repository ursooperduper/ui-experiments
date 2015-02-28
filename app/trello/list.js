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
     var vml = this;

     //Initializers
     vml.addListButton = true;
     vml.addListForm = false;
     vml.addListButtonLabel = 'Add List...';
     vml.listMenu = false;

     // Handles the display of the add list button or form
     vml.toggleAddListForm = function() {
       vml.addListButton = !vml.addListButton;
       vml.addListForm = !vml.addListForm;
     };

     vml.showListMenu = function() {
       vml.listMenu = !vml.listMenu;
     };

     // Base model that will contain the list & card data
     vml.models = {
       selected: null,
       lists: {}
     };

     // Initializers
     // Use a number for the object name to keep the correct list order
     var numLists = 0;
     vml.list = null;

     // Adds a new list to the board
     vml.addList = function() {
       if (vml.list !== null) {
         numLists += 1;

         // Add a new list object to the model
         vml.models.lists[numLists] = {
           label : vml.list.name,
           cards : []
         };

         // Cleanup
         vml.list = null;
         vml.toggleAddListForm();
       }
     };
   }

   angular.module('app')
    .controller('ListController', ListController);

})();
