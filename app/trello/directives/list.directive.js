(function() {
  'use strict';

  function list() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-list.html',
      link: function(scope) {
        scope.listTitle      = {};
        scope.editListForm   = {};
        scope.listMenu       = {};
        scope.listMenuToggle = {};
        scope.addCardButton  = {};
        scope.addCardForm    = {};

        scope.toggleListUI = function(listNum) {
          scope.listTitle[listNum]      = true;
          scope.listMenu[listNum]       = false;
          scope.listMenuToggle[listNum] = true;
          scope.editListForm[listNum]   = false;
          scope.addCardButton[listNum]  = true;
          scope.addCardForm[listNum]    = false;
        };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skList', list);

})();
