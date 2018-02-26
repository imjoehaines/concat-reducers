# Concat-Reducers
By default, Redux's combineReducers nests state, which makes it inconvenient to split a large reducer into smaller parts.

Concat-Reducers combines any number of reducers into a single reducer without nesting state, allowing you to decide how to structure state within your own app.

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

const reducer = concatReducers(
  myFirstReducer,
  mySecondReducer
)
```


## Further info

State that looks like this with `combineReducers`:

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

would instead look like this with `concatReducers`:

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
