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
    var oldListLabel = null;

    //Initializers
    vml.addListButton     = true;
    vml.addListForm       = false;
    vml.listTitle         = {};
    vml.editListForm      = {};
    vml.listMenu          = {};
    vml.listMenuToggle    = {};
    vml.addCardButton     = {};
    vml.addCardForm       = {};
    vml.card              = null;

     // Use a number for the object name to keep the correct list order
    vml.numLists  = 0;
    vml.list      = null;
     // Base model that will contain the list & card data
    vml.models = {
      selected    : null,
      lists       : {}
    };

    // Handles the display of the add list button or form
    vml.toggleAddListForm = function() {
      vml.addListButton   = !vml.addListButton;
      vml.addListForm     = !vml.addListForm;
    };

     // Adds a new list to the board
    vml.addList = function() {
      if (vml.list !== null) {
        vml.numLists += 1;

        // Add a new list object to the model
        vml.models.lists[vml.numLists] = {
          id     : vml.numLists,
          title  : vml.list.name,
          cards  : []
        };

        // Create show/hide variables
        vml.listTitle[vml.numLists]       = true;
        vml.listMenu[vml.numLists]        = false;
        vml.listMenuToggle[vml.numLists]  = true;
        vml.editListForm[vml.numLists]    = false;
        vml.addCardButton[vml.numLists]   = true;
        vml.addCardForm[vml.numLists]     = false;

        // Cleanup
        vml.list = null;
        vml.toggleAddListForm();
      }
    };

    // Handles the display of the list menu toggle
    vml.toggleListMenu = function(id) {
      vml.listMenu[id] = !vml.listMenu[id];
    };

    // Handles the display of the edit list form
     vml.toggleEditListForm = function(id) {
       vml.listTitle[id]        = !vml.listTitle[id];
       vml.listMenuToggle[id]   = !vml.listMenuToggle[id];
       vml.editListForm[id]     = !vml.editListForm[id];

       if (vml.editListForm[id]) {
        //  vml.list = vml.models.lists[id];
         oldListLabel = vml.models.lists[id].title;
       }
     };

     // Allows for editing of the list title when the text is clicked
     vml.editList = function(id, action) {
       if (action === 'cancel') {
         vml.models.lists[id].label = oldListLabel;
       }
       vml.toggleEditListForm(vml.models.lists[id].id);
     };

    // Trello has an archive function, for this demo, we'll delete instead
     vml.archiveList = function(id) {
       delete vml.models.lists[id];
     };

    //Handles the display of the add card button or form
    vml.toggleAddCardForm = function(id) {
      vml.addCardButton[id]   = !vml.addCardButton[id];
      vml.addCardForm[id]     = !vml.addCardForm[id];
    };

    // Adds a new card to a list
    vml.addCard = function(id) {
      if (vml.card !== null) {
        // Add the card to the appropriate list
        vml.models.lists[id].cards.push({label: vml.card.title});

        // Cleanup, reset the card
        vml.card = null;
      }
    };
  }

  angular.module('app')
    .controller('ListController', ListController);
})();
