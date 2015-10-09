(function() {
  'use strict';

  function addList() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-add-list.html',
      link: function(scope) {
        scope.addListButton  = true;
        scope.addListForm    = false;

        scope.toggleAddListForm = function() {
          scope.addListButton = !scope.addListButton;
          scope.addListForm   = !scope.addListForm;
        };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skAddList', addList);
})();
