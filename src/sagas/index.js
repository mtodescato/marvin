/*
 * file: index.js
 * version: 0.1
 * type: javascript index
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: entry point for sagas's package,
 * * returns all sagas and the root sagas generator as default
 * changes:
 * * Denis Mazzucato    | 2018/04/13 | file creation
 */

import { fork, all } from 'redux-saga/effects';
import * as bookletInfo from './bookletInfo';
import * as addUser from './addUser';

export default function* rootSaga() {
  yield all([
    fork(bookletInfo.triggerAction),
    fork(addUser.triggerAction),
  ]);
}

export {
  bookletInfo,
  addUser,
};
