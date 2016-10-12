'use strict';

var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var angular = require('angular');
var testModule = require('./module');

require('angular-mocks');

var module = angular.mock.module;
var inject = angular.mock.inject;

describe('cockpit.plugin.base.views.dashboard decisions controller', function() {
  var $rootScope;
  var $q;
  var $scope;
  var getCount;
  var $controller;

  beforeEach(module(testModule.name));

  beforeEach(inject(function(_$rootScope_, _$q_, _$controller_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    $controller = _$controller_;
    getCount = sinon.stub().returns($q.when('results'));
    $scope = $rootScope.$new();

    $controller('DecisionsController', {
      $scope: $scope,
      decisionsCount: {
        getCount: getCount
      }
    });
  }));

  it('should set initial loading state to LOADING', function() {
    expect($scope.loadingState).to.eql('LOADING');
  });

  it('should set loading state to LOADED after successful loading', function() {
    $rootScope.$digest();

    expect($scope.loadingState).to.eql('LOADED');
  });

  it('should set results to $scope.count', function() {
    $rootScope.$digest();

    expect($scope.count).to.eql('results');
  });

  it('should handle loading fail', function() {
    getCount.returns($q.reject({message: 'error'}));

    try {
      $controller('DecisionsController', {
        $scope: $scope,
        decisionsCount: {
          getCount: getCount
        }
      });

      $rootScope.$digest();
    } catch(error) {
      expect(error.message).to.eql('error');
    }

    expect($scope.loadingState).to.eql('ERROR');
    expect($scope.loadingError).to.eql('error');
  });
});
