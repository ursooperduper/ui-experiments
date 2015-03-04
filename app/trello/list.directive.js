(function() {
  'use strict';

  function list() {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'trello/sk-list.html'
    };
  }

  angular
    .module('app')
    .directive('skList', list);

})();
