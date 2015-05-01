'use strict';

app.factory('scan', function($q) {
  var scan = {};

  var _allScans = [
    {'id': 1, 'title': 'object 1'},
    {'id': 2, 'title': 'object 2'},
    {'id': 3, 'title': 'object 3'},
    {'id': 4, 'title': 'object 4'},
    {'id': 5, 'title': 'object 5'},
    {'id': 6, 'title': 'object 6'},
  ];

  scan.all = function() {
    return _allScans;
  };

  scan.get = function(scanId) {
    var deferred = $q.defer();

    var scan = {};

    for(var i in _allScans) {
      // if match, return
      if(_allScans[i].id === scanId) {
        scan = _allScans[i];
        deferred.resolve(scan);
      }
    }

    return deferred.promise;
  };

  return scan;
});
