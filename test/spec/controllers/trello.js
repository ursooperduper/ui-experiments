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

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
