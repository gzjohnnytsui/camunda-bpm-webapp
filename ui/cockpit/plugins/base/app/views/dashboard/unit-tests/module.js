var angular = require('angular');
var dashboard = require('../index');
var testModule = require('../../../../../../../common/unit-tests/tests-module');

module.exports = angular.module('cockpit.plugin.base.views.dashboard.tests', [testModule.name, dashboard.name]);
