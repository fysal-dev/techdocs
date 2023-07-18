# useReducer

* useReducer is used for State Management
* It is an alternative to useState

### useReducer parameters

```
    useReducer(reducer, initialState)
```

* `useReducer` has 2 parameters
  * reducer (function/method)
  * initialState 


### reducer function parameters

        newState = reducer(currentState, action)
    
* `reducer` function has 2 parameters
  * `currentState`
  * `action`
* `reducer` function will return a `newState`

### useReducer return

* **useReducer** will return a pair of state, depending on `reducer(currentState, action)`
* `useReducer` will returns a pair of values
        
        [newState, dispatch]
