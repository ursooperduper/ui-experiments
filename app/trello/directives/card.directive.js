(function() {
  'use strict';

  function card() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-card.html',
      link: function(scope) {
        scope.activeCardId = -1;

        scope.toggleCardUI = function(card) {
          scope.editCardToggle[card] = true;
          scope.cardItem[card]       = true;
          scope.editCardForm[card]   = false;
        };

        // scope.whichCard = function(cardId) {
        //   scope.activeCard = cardId;
        //   console.log('active card is ' + cardId);
        // };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skCard', card);

})();
