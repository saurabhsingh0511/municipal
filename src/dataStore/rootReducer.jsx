import { combineReducers } from 'redux';
import myReducer from './reducers';
import newReducers from './newReducers';

const rootReducer = combineReducers({
  myReducer,
  newReducers,
  // Add other reducers here if needed
});

export default rootReducer;