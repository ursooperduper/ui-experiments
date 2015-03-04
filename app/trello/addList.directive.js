(function() {
  'use strict';

  function addList() {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'trello/sk-add-list.html'  
    };
  }

  angular
    .module('app')
    .directive('skAddList', addList);
})();
