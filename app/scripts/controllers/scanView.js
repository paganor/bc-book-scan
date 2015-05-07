'use strict';

app.controller('ScanViewCtrl', function($scope,  $stateParams, $cordovaToast, scan) {
  scan.get($stateParams.scanUUID).then(function(data) {
    $scope.scan = data;
  });
});
