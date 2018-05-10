import { expectSaga } from 'redux-saga-test-plan';
import { addUser as saga } from '../../sagas';
import { AddUser } from '../../reducers';

describe('AddUser saga test suite', () => {
  const user = {};
  const mock = user;
  it('handles reducers when request is dispatched', () => {
    saga.mockInjection(mock);
    return expectSaga(saga.triggerAction)
      .withReducer(AddUser.reducer)
      .put(AddUser.creators.addUserSuccess())
      .dispatch(AddUser.creators.addUserRequest(mock))
      .hasFinalState({
        status: 'RESOLVED',
      })
      .run();
  });
});
