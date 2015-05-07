'use strict';

app.factory('scan', function($q, $http, uuid4) {
  var scan = {};

  var _allScans = [];

  scan.all = function() {
    return _allScans;
  };

  scan.get = function(uuid) {
    var deferred = $q.defer();

    var scan = {};

    for(var i in _allScans) {
      // if match, return
      if(_allScans[i].uuid === uuid) {
        scan = _allScans[i];
        deferred.resolve(scan);
      }
    }

    return deferred.promise;
  };

  scan.add = function(type, value) {
    var deferred = $q.defer();

    var newBook = {};

    $http.get('http://thor.bigcompass.com:5555/rest/bookScan/book/' + value)
      .success(function(data) {
        // success function
        newBook = data.items[0];
        newBook.scanTime = new Date().getTime();
        newBook.uuid = uuid4.generate();
        _allScans.splice(0, 0, newBook);
        deferred.resolve(newBook);
      })
      .error(function(data, status) {
        // failure callback
        console.log(data, status);
        deferred.reject('lookup-error');
      });

      return deferred.promise;
  };

  scan.delete = function(item) {
    var deferred = $q.defer();

    var index = _allScans.indexOf(item);

    // if item is found
    if (index !== -1) {
      _allScans.splice(index, 1);
      deferred.resolve(_allScans);
    } else {
      deferred.reject('scan-not-found');
    }

    return deferred.promise;
  };

  return scan;
});
