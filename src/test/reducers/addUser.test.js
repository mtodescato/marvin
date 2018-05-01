import { createStore } from 'redux';
import { AddUser } from '../../reducers';

describe('AddUser reducer test suite', () => {
  const store = createStore(AddUser.reducer);
  it('should set userAdded to true when success action in dispatched', () => {
    store.dispatch(AddUser.creators.addUserSuccess());
    expect(store.getState()).to.have.property('userAdded', true);
  });
});
