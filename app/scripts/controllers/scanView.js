'use strict';

app.controller('ScanViewCtrl', function($scope,  $stateParams, $cordovaToast, scan) {
  scan.get(parseInt($stateParams.scanId)).then(function(data) {
    $scope.scan = data;
  });
});
