(function() {
  'use strict';

  function editList() {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'trello/sk-edit-list.html'
    };
  }

  angular
    .module('app')
    .directive('skEditList', editList);
})();
