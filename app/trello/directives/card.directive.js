(function() {
  'use strict';

  function card() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-card.html'
    };
  }

  angular
    .module('uiApp')
    .directive('skCard', card);

})();
