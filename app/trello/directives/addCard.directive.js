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
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skAddCard', addCard);

})();
