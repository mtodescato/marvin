import { createStore } from 'redux';
import reducer from './reducers/rootReducer';

const Store = createStore(reducer);

export default Store;
