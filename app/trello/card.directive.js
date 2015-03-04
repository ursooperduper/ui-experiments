(function() {
  'use strict';

  function card() {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'trello/sk-card.html'
    };
  }

  angular
    .module('app')
    .directive('skCard', card);

})();
