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
