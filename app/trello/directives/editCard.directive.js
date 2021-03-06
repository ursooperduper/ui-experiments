(function() {
  'use strict';

  function editCard() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-edit-card.html',
      link: function(scope) {
        // Handles the display of the edit card button or form
        scope.toggleEditCardForm = function(id) {
          scope.editCardToggle[id] = !scope.editCardToggle[id];
          scope.cardItem[id]       = !scope.cardItem[id];
          scope.editCardForm[id]   = !scope.editCardForm[id];
        };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skEditCard', editCard);
})();
