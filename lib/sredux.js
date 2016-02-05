
var sredux = (function () {
    function Store(reducer, state) {
        this.getState = function () { return state; };
        
        this.dispatch = function (action) {
            state = reducer(state, action);
            
            return state;
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