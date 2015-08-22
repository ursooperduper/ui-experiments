(function() {
  'use strict';

  function editList() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-edit-list.html',
      link: function(scope) {
        // Handles the display of the edit list form
         scope.toggleEditListForm = function(id) {
           scope.listTitle[id]      = !scope.listTitle[id];
           scope.listMenuToggle[id] = !scope.listMenuToggle[id];
           scope.editListForm[id]   = !scope.editListForm[id];

           if (scope.editListForm[id]) {
             scope.oldListLabel = scope.models.lists[id].title;
           }
         };


         // Allows for editing of the list title when the text is clicked
         scope.editList = function(id, action) {
           if (action === 'cancel') {
             console.log('Canceling');
              scope.models.lists[id].title = scope.oldListLabel;
           }
           scope.toggleEditListForm(scope.models.lists[id].id);
         };

      }
    };
  }

  angular
    .module('uiApp')
    .directive('skEditList', editList);
})();
