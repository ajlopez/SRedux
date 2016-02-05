
var sredux = require('..');

exports['create store'] = function (test) {
    var store = sredux.createStore(null);
    
    test.ok(store);
    test.equal(typeof store, 'object');
};

exports['get initial state as undefined'] = function (test) {
    var store = sredux.createStore();
    
    test.strictEqual(store.getState(), undefined);
};

exports['create store with initial state'] = function (test) {
    var store = sredux.createStore(null, 42);
    
    test.strictEqual(store.getState(), 42);
};

exports['create store with reducer'] = function (test) {
    function reducer(state, action) {
        if (state === undefined)
            return 0;
            
        return state + 1;
    }
    
    var store = sredux.createStore(reducer);
    
    test.equal(store.dispatch(null), 0);
    test.equal(store.getState(), 0);
    test.equal(store.dispatch(null), 1);
    test.equal(store.getState(), 1);
};

exports['dispatch using reducer and initial state'] = function (test) {
    function reducer(state, action) {
        return state + 1;
    }
    
    var store = sredux.createStore(reducer, 0);
    
    test.equal(store.dispatch(null), 1);
    test.equal(store.getState(), 1);
    test.equal(store.dispatch(null), 2);
    test.equal(store.getState(), 2);
};

