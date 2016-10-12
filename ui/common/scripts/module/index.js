'use strict';

var angular = require('camunda-commons-ui/vendor/angular');

var promisify = require('./services/promisify');
var promisifiedCamAPI = require('./services/promisified-cam-api');
var isModuleAvailable = require('./services/is-module-available');
var exposeScopeProperties = require('./services/expose-scope-properties');

var camToolbar = require('./components/cam-toolbar');
var camPagination = require('./components/cam-pagination');

var camHoverArea = require('./directives/cam-hover-area');
var camHoverTrigger = require('./directives/cam-hover-trigger');
var camHoverableTitle = require('./directives/cam-hoverable-title');

var HoverAreaController = require('./controllers/hover-area');
var CamPaginationController = require('./controllers/cam-pagination');

var routeUtil = require('../util/routeUtil');
var paginationUtils = require('../util/pagination-utils');

var ngModule = angular.module('cam-common', []);

ngModule.factory('promisify', promisify);
ngModule.factory('promisifiedCamAPI', promisifiedCamAPI);
ngModule.factory('isModuleAvailable', isModuleAvailable);
ngModule.factory('exposeScopeProperties', exposeScopeProperties);

ngModule.directive('camToolbar', camToolbar);
ngModule.directive('camPagination', camPagination);

ngModule.directive('camHoverArea', camHoverArea);
ngModule.directive('camHoverTrigger', camHoverTrigger);
ngModule.directive('camHoverableTitle', camHoverableTitle);

ngModule.controller('HoverAreaController', HoverAreaController);
ngModule.controller('CamPaginationController', CamPaginationController);

ngModule.value('routeUtil', routeUtil);
ngModule.value('paginationUtils', paginationUtils);

module.exports = ngModule;




