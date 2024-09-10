import { createStore } from 'redux';

// Define an initial state
const initialState = {
  counter: 0,
};

// Create a reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
