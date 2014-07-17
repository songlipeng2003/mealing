'use strict';

describe('Service: commonService', function () {

  // load the service's module
  beforeEach(module('mealingApp'));

  // instantiate service
  var commonService;
  beforeEach(inject(function (_common_) {
    commonService = _common_;
  }));

  it('should do something', function () {
    expect(!!commonService).toBe(true);
  });

});
