import { combineReducers } from 'redux';

// @REDUCERS
import vastReducer from './vastReducer';
import singleVastReducer from './singleVastReducer';
import createVastReducer from './createVastReducer';
import { reducer as formReducer } from 'redux-form'

// @ROOT REDUCER
const rootReducer =  combineReducers({
  vastReducer,
  singleVastReducer,
  createVastReducer,
  form: formReducer
});

export default rootReducer;