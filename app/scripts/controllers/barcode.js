'use strict';

app.controller('BarcodeCtrl', function($scope,
                                       $ionicPlatform,
                                       $cordovaBarcodeScanner) {

  $scope.launchScanner = function() {
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          console.log(barcodeData);
        }, function(error) {
          // An error occurred
          console.log(error);
        });
    });
  };
});
