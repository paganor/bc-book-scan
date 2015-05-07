'use strict';

app.controller('BarcodeCtrl', function($scope,
                                       $ionicPlatform,
                                       $cordovaBarcodeScanner,
                                       $state,
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
      scan.add('EAN_13', '9780937381885')
        .then(function(newBook) {
          // go to state
          $state.go('scanView', { 'scanUUID' : newBook.uuid });
        },
        function(reason) {
          // reject reason
          console.log('rejected: ', reason);
        });
    }
  };
});
