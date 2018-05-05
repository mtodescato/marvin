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
<<<<<<< HEAD
import Web3 from './web3';
=======
import MenuEntries from './menuEntries';
import UserReducer from './userReducer';
import ListUsers from './listUsers';
>>>>>>> origin/master

export default combineReducers({
  [BookletInfo.store]: BookletInfo.reducer,
  [AddUser.store]: AddUser.reducer,
<<<<<<< HEAD
  [Web3.store]: Web3.reducer,
=======
  [MenuEntries.store]: MenuEntries.reducer,
  [UserReducer.store]: UserReducer.reducer,
  [ListUsers.store]: ListUsers.reducer,
>>>>>>> origin/master
});

// export all reducers
export {
  BookletInfo,
  AddUser,
<<<<<<< HEAD
  Web3,
=======
  MenuEntries,
  UserReducer,
  ListUsers,
>>>>>>> origin/master
};
