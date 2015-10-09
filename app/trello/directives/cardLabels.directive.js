(function() {
  'use strict';

  function cardLabels() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/templates/sk-card-labels.html',
      link: function(scope) {
        // Initializers
        scope.greenLabel = {};
        scope.yellowLabel = {};
        scope.orangeLabel = {};
        scope.redLabel = {};
        scope.purpleLabel = {};
        scope.blueLabel = {};

        // Set initial values for cards
        scope.greenLabel[scope.card.id]  = false;
        scope.yellowLabel[scope.card.id] = false;
        scope.orangeLabel[scope.card.id] = false;
        scope.redLabel[scope.card.id]    = false;
        scope.purpleLabel[scope.card.id] = false;
        scope.blueLabel[scope.card.id]   = false;

        scope.toggleLabel = function(event) {
          if (scope.activeCard !== -1) {
            console.log('activeCard is an actual card' + event);
          }
        };
      }
    };
  }

  angular
    .module('uiApp')
    .directive('skCardLabels', cardLabels);
})();
