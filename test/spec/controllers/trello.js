'use strict';

describe('Controller: ListController', function () {

  // load the controller's module
  beforeEach(module('app'));

  var vml;

  beforeEach(inject(function ($controller) {
    vml = $controller('ListController');
  }));

  describe('setting up initial states', function() {

    it('should set up view states for the add list button and form', function() {
      expect(vml.addListButton).toEqual(true);
      expect(vml.addListForm).toEqual(false);
    });


  });

  describe('The add list functions', function() {

    it('should toggle the add list form and button correctly so when one is visible, the other is hidden', function() {
      vml.addListButton = true;
      vml.addListForm = false;
      vml.toggleAddListForm();
      expect(vml.addListButton).toEqual(false);
      expect(vml.addListForm).toEqual(true);
      vml.toggleAddListForm();
      expect(vml.addListButton).toEqual(true);
      expect(vml.addListForm).toEqual(false);
    });




  });

});
