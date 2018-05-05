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
import Web3 from './web3';
import Web3UserInfo from './web3UserInfo';
import MenuEntries from './menuEntries';
import ListUsers from './listUsers';

export default combineReducers({
  [BookletInfo.store]: BookletInfo.reducer,
  [AddUser.store]: AddUser.reducer,
  [Web3.store]: Web3.reducer,
  [Web3UserInfo.store]: Web3UserInfo.reducer,
  [MenuEntries.store]: MenuEntries.reducer,
  [ListUsers.store]: ListUsers.reducer,
});

// export all reducers
export {
  BookletInfo,
  AddUser,
  Web3,
  Web3UserInfo,
  MenuEntries,
  ListUsers,
};
