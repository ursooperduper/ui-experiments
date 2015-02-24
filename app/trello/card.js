(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.controller:CardController
   * @description
   * # CardController
   * Handles functionality related to the cards in lists
   */
   function CardController($scope) {

     var vmc = this;
     vmc.list = $scope.$parent.list;
     vmc.list.cards = [];
     vmc.card = null;
     vmc.addCardButton = true;
     vmc.addCardForm = false;

     // Handles the display of the add card button or form
     vmc.toggleAddCardForm = function() {
       vmc.addCardButton = !vmc.addCardButton;
       vmc.addCardForm = !vmc.addCardForm;
     };

     // Adds a new card to a list
     vmc.addCard = function() {
       if (vmc.card !== null) {
         // Add the card to the appropriate list
         vmc.list.cards.push({label: vmc.card.title});

         // Cleanup, reset the card
         vmc.card = null;
       }
     };
   }

   angular.module('app')
    .controller('CardController', CardController);
})();
