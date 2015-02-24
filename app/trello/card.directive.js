(function() {
  'use strict';

  function card() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/sk-card.html'
    };
  }

  angular
    .module('app')
    .directive('skCard', card);

})();
