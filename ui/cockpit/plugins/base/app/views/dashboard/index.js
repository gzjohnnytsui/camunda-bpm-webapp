var angular = require('angular');
var camCommon = require('../../../../../../common/scripts/module');
var dashboardProcesses = require('./views/processes');
var dashboardDecisions = require('./views/decisions');
var dashboardDeployments = require('./views/deployments');
var dashboardReports = require('./views/reports');
var dashboardBatches = require('./views/batches');
var dashboardTasks = require('./views/tasks');
var decisionsCount = require('./services/decisions-count');
var DecisionsController = require('./controllers/decisions');

var ngModule = angular.module('cockpit.plugin.base.views.dashboard', [camCommon.name]);

ngModule.config(dashboardProcesses);
ngModule.config(dashboardDecisions);
ngModule.config(dashboardDeployments);
ngModule.config(dashboardReports);
ngModule.config(dashboardBatches);
ngModule.config(dashboardTasks);

ngModule.factory('decisionsCount', decisionsCount);

ngModule.controller('DecisionsController', DecisionsController);

module.exports = ngModule;
