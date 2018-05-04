/*
 * file: index.js
 * version: 0.1
 * type: javascript index
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: entry point for reducer's package,
 * * returns all reducers and the combine reducers as default
 * changes:
 * * Denis Mazzucato    | 2018/04/13 | file creation
 * * Denis Mazzucato    | 2018/04/27 | added BookletInfo module
 */

import { combineReducers } from 'redux';
// import all reducers
import BookletInfo from './bookletInfo';
import AddUser from './addUser';
import MenuEntries from './menuEntries';
import UserReducer from './userReducer';
import ListUsers from './listUsers';

export default combineReducers({
  [BookletInfo.store]: BookletInfo.reducer,
  [AddUser.store]: AddUser.reducer,
  [MenuEntries.store]: MenuEntries.reducer,
  [UserReducer.store]: UserReducer.reducer,
  [ListUsers.store]: ListUsers.reducer,
});

// export all reducers
export {
  BookletInfo,
  AddUser,
  MenuEntries,
  UserReducer,
  ListUsers,
};
