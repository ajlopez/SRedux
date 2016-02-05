
var sredux = (function () {
    function Store(reducer, state) {
        var subscribers = [];
        
        this.getState = function () { return state; };
        
        this.dispatch = function (action) {
            state = reducer(state, action);
            
            subscribers.forEach(function (subscriber) {
                if (subscriber)
                    subscriber();
            });
            
            return state;
        };
        
        this.subscribe = function (fn) {
            subscribers.push(fn);
            
            return function () {
                var p = subscribers.indexOf(fn);
                
                if (p >= 0)
                    delete subscribers[p];
            }
        };
    }
    
    function createStore(reducer, state) {
        return new Store(reducer, state);
    }
    
    return {
        createStore: createStore
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = sredux;
