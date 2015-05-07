'use strict';

app
  .filter('isbn', function() {
    return function(input) {
      if(!input) {
        return '--';
      } else {
        for (var i in input) {
          if(input[i].type === 'ISBN_13') {
            return input[i].identifier;
          }
          else if(input[i].type === 'ISBN_10') {
            return '978' + input[i].identifier;
          }
        }

        return '--';
      }
    };
  });
