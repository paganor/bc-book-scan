'use strict';

app.controller('BarcodeCtrl', function($scope,
                                       $ionicPlatform,
                                       $cordovaToast,
                                       $cordovaBarcodeScanner) {
  $scope.log = function() {
    $ionicPlatform.ready(function() {
      $cordovaToast
        .showLongCenter('heyyyy..')
        .then(function(success) {
          console.log('was success', success);
        }, function(error) {
          console.log('was error', error);
        });
    });
  };

  $scope.launchScanner = function() {
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          $cordovaToast
            .showLongCenter(barcodeData)
            .then(function(success) {
              console.log(success);
            });
        }, function(error) {
          // An error occurred
          console.log(error);
        });
    });
  };
});
