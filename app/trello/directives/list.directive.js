(function() {
  'use strict';

  function list() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-list.html'
    };
  }

  angular
    .module('uiApp')
    .directive('skList', list);

})();
