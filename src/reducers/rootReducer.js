import { combineReducers } from 'redux';
import menuEntriesReducer from './menuEntriesReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  menuEntriesReducer,
  userReducer,
});

export default rootReducer;
