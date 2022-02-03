import { combineReducers, createStore } from 'redux';
import user from './user';

const mainReducer = combineReducers({ user });
const store = createStore(
  mainReducer,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-disable no-underscore-dangle */
);

export default store;
