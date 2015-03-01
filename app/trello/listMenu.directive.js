(function() {
  'use strict';

  function listMenu() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/sk-list-menu.html'
    };
  }

  angular
    .module('app')
    .directive('skListMenu', listMenu);

})();