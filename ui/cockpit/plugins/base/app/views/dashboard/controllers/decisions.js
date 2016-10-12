'use strict';

module.exports = [
  '$scope', 'decisionsCount', 'isModuleAvailable',
  function($scope, decisionsCount, isModuleAvailable) {
    $scope.count = 0;
    $scope.loadingState = 'LOADING';

    decisionsCount
      .getCount()
      .then(function(results) {
        $scope.loadingState = 'LOADED';
        $scope.count = results;
      })
      .catch(function(err) {
        $scope.loadingError = err.message;
        $scope.loadingState = 'ERROR';
        throw err;
      });

    $scope.isDrdAvailable = isModuleAvailable('cockpit.plugin.drd');
  }
];
