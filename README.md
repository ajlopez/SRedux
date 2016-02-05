# SRedux

Simple Redux-like library, in plain JavaScript

Totally inspired in [Redux](http://rackt.org/redux/)

## Installation

Via npm on Node:

```
npm install sredux
```

In your browser:
TBD

## Usage

```
// your reducer function
function reducer(state, action) {
    return state + 1;
}

// create store with reducer and optional initial state (undefined as default value)    
var store = sredux.createStore(reducer, 0);

// subscribe to states, returning unsubscribe function
var unsubscribe = store.subscribe(function () {
    console.log('new state', store.getState());
});

// send action
store.dispatch({ type: 'ANY ACTION' });
// new state 1

// unsubscribe
unsubscribe();
```

## Samples

TBD

## Versions

TBD

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SRedux) and submit
[pull requests](https://github.com/ajlopez/SRedux/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

