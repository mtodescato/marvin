import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import rootSaga from './sagas';
import { addBasicUsers } from './sagas/web3calls/databasing';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

// populate blockchain with fake user, exam, academicYear ...
addBasicUsers();

sagaMiddleware.run(rootSaga);
export default Store;
