(function() {
  'use strict';

  function addList() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/sk-add-list.html'
    };
  }

  angular
    .module('app')
    .directive('skAddList', addList);

})();
