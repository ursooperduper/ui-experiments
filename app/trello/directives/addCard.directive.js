(function() {
  'use strict';

  function addCard() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-add-card.html',
      link: function(scope) {
        // Handles the display of the add card button & form
        scope.toggleAddCardForm = function(id) {
          scope.addCardButton[id] = !scope.addCardButton[id];
          scope.addCardForm[id]   = !scope.addCardForm[id];
        };

        // Adds a new card to a list
        scope.addCard = function(id) {
          if (scope.card !== null) {
            scope.numCards += 1;

            // Add the card to the appropriate list
            scope.models.lists[id].cards.push({
              id: scope.numCards,
              title: scope.card.title
            });

            // Set up show/hide for the edit functions
            scope.editCardToggle[scope.numCards] = true;
            scope.cardItem[scope.numCards]       = true;
            scope.editCardForm[scope.numCards]   = false;

            // Cleanup, reset the card
            scope.card = null;
          }
        };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skAddCard', addCard);

})();
