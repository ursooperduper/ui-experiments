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
     // vml stands for ViewModelList
     var vml = this;

     //Initializers
     vml.addListButton = true;
     vml.addListForm = false;
     vml.addListButtonLabel = 'Add List...';
     vml.listMenu = false;
     // Use a number for the object name to keep the correct list order
     var numLists = 0;
     vml.list = null;
     // Base model that will contain the list & card data
     vml.models = {
       selected: null,
       lists: {}
     };

     // Handles the display of the add list button or form
     vml.toggleAddListForm = function() {
       vml.addListButton = !vml.addListButton;
       vml.addListForm = !vml.addListForm;
     };

     vml.toggleListMenu = function() {
       vml.listMenu = !vml.listMenu;
     };

     // Adds a new list to the board
     vml.addList = function() {
       if (vml.list !== null) {
         numLists += 1;

         // Add a new list object to the model
         vml.models.lists[numLists] = {
           id : numLists,
           label : vml.list.name,
           cards : []
         };

         // Cleanup
         vml.list = null;
         vml.toggleAddListForm();
       }
     };

     // Trello has an archive function, for this demo, we'll delete instead
     vml.archiveList = function(id) {
       delete vml.models.lists[id];
     };
   }

   angular.module('app')
    .controller('ListController', ListController);

})();
