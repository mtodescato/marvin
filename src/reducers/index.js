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
 */

import { combineReducers } from 'redux';
// import all reducers
import FakeReducer from './fakeReducer';

export default combineReducers({
  [FakeReducer.store]: FakeReducer.reducer,
});

// export all reducers
export { FakeReducer };
