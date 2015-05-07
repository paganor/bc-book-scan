'use strict';

app.controller('BarcodeCtrl', function($scope,
                                       $ionicPlatform,
                                       $cordovaBarcodeScanner,
                                       $state,
                                       $cordovaToast,
                                       scan) {

  $scope.launchScanner = function() {
    if(true) {
      $ionicPlatform.ready(function() {
        $cordovaBarcodeScanner
          .scan()
          .then(function(barcodeData) {
            // hit api
            scan.add(barcodeData.format, barcodeData.text)
              .then(function(newBook) {
                // go to state
                $state.go('scanView', { 'scanUUID' : newBook.uuid });
              },
              function(reason) {
                // reject reason
                var reasonLong;

                switch(reason) {
                  case 'not-a-book':
                    reasonLong = 'Sorry, that barcode doesn\'t belong to a book.';
                    break;
                  case 'book-not-found':
                    reasonLong = 'Sorry, that book isn\'t in our API. Try another.';
                    break;
                  case 'lookup-error':
                    reasonLong = 'Sorry, an error occured. Try again.';
                    break;
                  default:
                    reasonLong = 'Error: Please try again later.';
                    break;
                }

                $cordovaToast.showLongCenter(reasonLong)
                  .then(function(){
                    console.log('error: ', reasonLong);
                  });
              });

          }, function(error) {
            // An error occurred
            $cordovaToast.showLongCenter(error)
              .then(function(){
                console.log('error: ', error);
              });
          });
      });
    } else {
      scan.add('UPC', '9780937381885')
        .then(function(newBook) {
          // go to state
          $state.go('scanView', { 'scanUUID' : newBook.uuid });
        },
        function(reason) {
          // reject reason
          var reasonLong;

          switch(reason) {
            case 'not-a-book':
              reasonLong = 'Sorry, that barcode doesn\'t belong to a book.';
              break;
            case 'book-not-found':
              reasonLong = 'Sorry, that book isn\'t in our API. Try another.';
              break;
            case 'lookup-error':
              reasonLong = 'Sorry, an error occured. Try again.';
              break;
            default:
              reasonLong = 'Error: Please try again later.';
              break;
          }

          $cordovaToast.showLongCenter(reasonLong)
            .then(function(){});
        });
    }
  };
});
