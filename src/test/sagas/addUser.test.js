import { createStore }  from 'redux';
import { AddUser } from 'redux';

describe('AddUser saga test suite', () => {
  const store = createStore(AddUser.reducer);
  it('should set store to true when success action is dispatched', () => {
    const userAdded = false;
    store.dispatch(AddUser.creators.addUserSuccess());
    expect(store.getState()).to.have.property('userAdded', true);
  });
});
