(function() {
  'use strict';

  function ListService() {
    var numLists = 0;
    var numCards = -1;
    var oldListTitle = null;
    var oldCardTitle = null;

    var model = {
      selected : null,
      lists    : {}
    };

    this.newList = function(listName) {
      numLists += 1;
      // Add a new list object to the model
      model.lists[numLists] = {
        id    : numLists,
        title : listName,
        cards : []
      };

      // Return this number so we know which UI elements to display
      return numLists;
    };

    this.setOldListTitle = function(listId) {
      oldListTitle = model.lists[listId].title;
    };

    this.editList = function(listId, action) {
      if (action === 'cancel') {
        model.lists[listId].title = oldListTitle;
      }
    };

    this.deleteList = function(listId) {
      delete model.lists[listId];
    };

    this.newCard = function(listId, cardTitle) {
      numCards += 1;

      // Add card to the appropriate list
      model.lists[listId].cards.push({
        id: numCards,
        title: cardTitle
      });

      // Return this number so we know which elements to display
      return numCards;
    };

    this.setOldCardTitle = function(listId, cardPos) {
      oldCardTitle = model.lists[listId].cards[cardPos].title;
    };

    this.editCard = function(listId, cardPos, action, newTitle) {
      if (action === 'cancel') {
        model.lists[listId].cards[cardPos].title = oldCardTitle;
      } else if (action === 'save') {
        model.lists[listId].cards[cardPos].title = newTitle;
      }
    };

    this.listAll = function() {
      return model;
    };
  }

  angular
    .module('uiApp')
    .service('ListService', ListService);
})();
