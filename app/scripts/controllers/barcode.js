'use strict';

app.controller('BarcodeCtrl', function($scope,
                                       $ionicPlatform,
                                       $cordovaBarcodeScanner,
                                       scan) {

  $scope.launchScanner = function() {
    if(false) {
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
    } else {
      console.log('starting scan..');
      scan.add('EAN_13', '9781607740551')
        .then(function(newBook) {
          console.log(newBook);
        });
    }
  };
});
