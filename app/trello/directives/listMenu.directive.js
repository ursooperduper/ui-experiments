(function() {
  'use strict';

  function listMenu() {
    return {
      restrict:     'E',
      replace:      true,
      templateUrl:  'trello/templates/sk-list-menu.html',
      link: function(scope) {
        // Handles the display of the list menu toggle
        scope.toggleListMenu = function(id) {
          scope.listMenu[id] = !scope.listMenu[id];
        };

        // Trello has an archive function, for this demo, we'll delete instead
        scope.archiveList = function(id) {
          delete scope.models.lists[id];
        };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skListMenu', listMenu);
})();
