'use strict';

var fs = require('fs');

var template = fs.readFileSync(__dirname + '/decisions.html', 'utf8');

module.exports = [
  'ViewsProvider',
  function(ViewsProvider) {
    ViewsProvider.registerDefaultView('cockpit.dashboard.section', {
      id: 'decisions',
      label: 'Decisions',
      template: template,
      pagePath: '#/decisions',
      checkActive: function(path) {
        return path.indexOf('#/decision') > -1;
      },
      controller: 'DecisionsController',
      priority: 80
    });
  }
];
