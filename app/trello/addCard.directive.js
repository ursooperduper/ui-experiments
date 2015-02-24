(function() {
  'use strict';

  function addCard() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/sk-add-card.html'
    };
  }

  angular
    .module('app')
    .directive('skAddCard', addCard);

})();