'use strict';

describe('Controller: TrelloCtrl', function() {

  // load the controller's module
  beforeEach(module('app'));

  var TrelloCtrl,
    scope;

  // Initialize the controller and mock a scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrelloCtrl = $controller('TrelloCtrl', {
      $scope: scope
    });
  }));
});
