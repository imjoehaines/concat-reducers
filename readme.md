# Concat-reducers
By default, Redux's combineReducers nests state. This concats several reducers into a single reducer without nesting state, allowing you to decide how to structure state.

## Installation
```
yarn add concat-reducers
```

## Usage
Instead of Redux's combineReducers, do:
```js
import concatReducers from 'concat-reducers'

import myFirstReducer from './myFirstReducer'
import mySecondReducer from './mySecondReducer'

export default concatReducers(
  myFirstReducer,
  mySecondReducer
)
```


## Further info

This converts this:

```js
{
  myFirstReducer: {
    id: 1,
    firstReducerForm: {
      name: '',
      email: ''
    }
  },
  mySecondReducer: {
    open: false,
    secondReducerForm: {
      address: '',
      postcode: ''
    }
  }
}
```

to:

```js
{
  id: 1,
  firstReducerForm: {
    name: '',
    email: ''
  },
  open: false,
  secondReducerForm: {
    address: '',
    postcode: ''
  }
}
```

This simply allows further choice in how to structure state.
Redux's nested state can be recreated if needed, but this also allows for state to be 'flattened' if you wish to do so.
