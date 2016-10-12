'use strict';

var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var angular = require('angular');
var testModule = require('./module');

require('angular-mocks');

var module = angular.mock.module;
var inject = angular.mock.inject;

describe('cockpit.plugin.base.views.dashboard decisionCount service', function() {
  var promisifiedCamAPI;
  var resource;
  var decisionsCount;
  var $rootScope;

  beforeEach(module(testModule.name));

  beforeEach(module(function($provide) {
    resource = {};

    promisifiedCamAPI = {};

    resource.count = sinon.stub();
    resource.decisionInstanceCount = sinon.stub();

    promisifiedCamAPI.resource = sinon
      .stub()
      .returns(resource);

    $provide.value('promisifiedCamAPI', promisifiedCamAPI);
  }));

  beforeEach(inject(function(_decisionsCount_, _$rootScope_, $q) {
    decisionsCount = _decisionsCount_;
    $rootScope = _$rootScope_;

    resource.count.onCall(0).returns(
      $q.when(5)
    );
    resource.count.onCall(1).returns(
      $q.when({count: 4})
    );
    resource.decisionInstanceCount.returns(
      $q.when({count: 22})
    );
  }));

  it('should return counts for decisions dashboard', function(done) {
    decisionsCount
      .getCount()
      .then(function(response) {
        expect(response.definitions).to.eql(5);
        expect(response.instances).to.eql(22);
        expect(response.drds).to.eql(4);

        done();
      });

    $rootScope.$digest();
  });
});
