'use strict';

app.controller('ScanCtrl', function($scope, scan) {
  $scope.scans = scan.all();

  $scope.delete = function(item) {
    scan.delete(item).then(function(allScans) {
      $scope.scans = allScans;
    });
  };
});
