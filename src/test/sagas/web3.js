import { expectSaga } from 'redux-saga-test-plan';
import { web3 as saga } from '../../sagas';
import { Web3 } from '../../reducers';

describe('Web3 saga test suite', () => {
  const mock = { address: '0x0', isAvailable: true };
  it('handles reducers when request is dispatched', () => {
    console.log(saga);
    saga.mockInjection(mock);
    return expectSaga(saga.triggerAction)
      .withReducer(Web3.reducer)
      .put(Web3.creators.web3Success(mock))
      .dispatch(Web3.creators.web3Request())
      .hasFinalState({
        address: mock.address,
        isAvailable: mock.isAvailable,
        status: 'RESOLVED',
      })
      .run();
  });
});
