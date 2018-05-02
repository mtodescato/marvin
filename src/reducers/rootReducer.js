import { combineReducers } from 'redux';
import menuEntriesReducer from './menuEntriesReducer';
import userReducer from './userReducer';
import addUserReducer from '../reducers/admin/addUserReducer';
import usersListReducer from './admin/usersListReducer';

const rootReducer = combineReducers({
  menuEntriesReducer,
  userReducer,
  usersListReducer,
  addUserReducer,
});

export default rootReducer;
