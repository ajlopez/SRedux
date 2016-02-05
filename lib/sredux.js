
var sredux = (function () {
    function Store() {
    }
    
    function createStore() {
        return new Store();
    }
    
    return {
        createStore: createStore
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = sredux;