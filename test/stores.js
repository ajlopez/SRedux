
var sredux = require('..');

exports['create store'] = function (test) {
    var store = sredux.createStore(null);
    
    test.ok(store);
    test.equal(typeof store, 'object');
};
