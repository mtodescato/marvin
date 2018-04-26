import { combineReducers } from 'redux';
import menuEntriesReducer from './menuEntriesReducer';

const rootReducer = combineReducers({
  menuEntriesReducer,
});

export default rootReducer;
