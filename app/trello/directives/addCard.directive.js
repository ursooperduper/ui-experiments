(function() {
  'use strict';

  function addCard() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-add-card.html',
      link: function(scope) {
        // Handles the display of the add card button & form
        scope.toggleAddCardForm = function(listId) {
          scope.addCardButton[listId] = !scope.addCardButton[listId];
          scope.addCardForm[listId]   = !scope.addCardForm[listId];
        };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skAddCard', addCard);

})();
