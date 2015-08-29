(function() {
  'use strict';

  function addCard() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-add-card.html',
      link: function(scope) {
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
