/*
 * file: index.js
 * version: 0.1
 * type: javascript module
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: apply middleware (as saga) and reducer for react-redux
 * changes:
 * * Denis Mazzucato    | 2018/04/13 | file creation
 */

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import rootSaga from './sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
export default Store;
