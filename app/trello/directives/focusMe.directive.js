(function() {
  'use strict';

  function focusMe($timeout) {
    return {
      link: function(scope, element, attrs) {
        scope.$watch(attrs.focusMe, function(value) {
          if(value === true) {
            $timeout(function() {
              element[0].focus();
              scope[attrs.focusMe] = false;
            });
          }
        });
      }
    };
  }

  angular
    .module('uiApp')
    .directive('focusMe', ['$timeout', focusMe]);
})();
