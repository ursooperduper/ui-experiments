(function() {
  'use strict';

  function card() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-card.html',
      link: function(scope) {
        scope.toggleCardUI = function(card) {
          scope.editCardToggle[card] = true;
          scope.cardItem[card]       = true;
          scope.editCardForm[card]   = false;
        };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skCard', card);

})();
