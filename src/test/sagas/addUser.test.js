import { createStore } from 'redux';
import { AddUser } from '../../reducers';

describe('AddUser saga test suite', () => {
  const store = createStore(AddUser.reducer);
  it('should set store to true when success action is dispatched', () => {
    store.dispatch(AddUser.creators.addUserSuccess());
    expect(store.getState()).to.have.property('userAdded', true);
  });
});
