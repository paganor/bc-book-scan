'use strict';

app.run(function($ionicPlatform, $http) {
  // http auth header
  $http.defaults.headers.common.Authorization = 'Basic Ym9va0xvb2t1cFVzZXI6QjFnY29tcGFzcw==';

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
