(function() {
  'use strict';

  function list($document) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'trello/sk-list.html'
    //  link: function(scope, element, attr) {

        // scope.isPopupVisible = false;
        //
        // scope.toggleSelect = function(){
        //   scope.isPopupVisible = !scope.isPopupVisible;
        // };

        // $document.bind('click', function(event){
        //   var isClickedElementChildOfPopup = element
        //     .find(event.target)
        //     .length > 0;
        //
        //   if (isClickedElementChildOfPopup) {
        //     return;
        //   }
        //
        //   console.log('Test', scope);
        //
        //   scope.addListForm = false;
        //   scope.$apply();
        // });
    //   }
    };
  }

  angular
    .module('app')
    .directive('skList', ['$document', list]);

})();
