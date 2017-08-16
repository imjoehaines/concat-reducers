export default (...reducers) =>
  (state, action) =>
    reducers.reduce((accumulator, reducer) =>
      reducer(accumulator, action), state
    )
