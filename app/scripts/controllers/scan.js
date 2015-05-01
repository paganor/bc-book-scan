'use strict';

app.controller('ScanCtrl', function($scope, scan) {
  $scope.scans = scan.all();
});
