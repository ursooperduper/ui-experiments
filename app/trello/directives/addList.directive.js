(function() {
  'use strict';

  function addList() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-add-list.html',
      link: function(scope) {
        scope.addListButton = true;
        scope.addListForm   = false;

        scope.toggleAddListForm = function() {
          scope.addListButton = !scope.addListButton;
          scope.addListForm   = !scope.addListForm;
        };

        // Adds a new list to the board
       scope.addList = function() {
         if (scope.list !== null) {
           scope.numLists += 1;

           // Add a new list object to the model
           scope.models.lists[scope.numLists] = {
             id    : scope.numLists,
             title : scope.list.name,
             cards : []
           };

           // Create show/hide variables
           scope.listTitle[scope.numLists]      = true;
           scope.listMenu[scope.numLists]       = false;
           scope.listMenuToggle[scope.numLists] = true;
           scope.editListForm[scope.numLists]   = false;
           scope.addCardButton[scope.numLists]  = true;
           scope.addCardForm[scope.numLists]    = false;

           // Cleanup
           scope.list = null;
           scope.toggleAddListForm();
         }
       };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skAddList', addList);
})();
