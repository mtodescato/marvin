import { expectSaga } from 'redux-saga-test-plan';
import { resetWeb3, mockWeb3, mockWeb3OnlyCurrentProvider } from '../utils/web3';
import { web3 as saga } from '../../sagas';
import { Web3 } from '../../reducers';
import { undefinedWeb3Account } from '../../sagas/web3calls/deployed';

describe('Web3 saga test suite', () => {
  it('should fail if web3 is undefined', () => {
    resetWeb3();
    return expectSaga(saga.triggerAction)
      .withReducer(Web3.reducer)
      .put(Web3.creators.web3AddressFailed(saga.undefinedMetamask))
      .dispatch(Web3.creators.web3AddressRequest())
      .hasFinalState({
        ...Web3.initialState,
        isAvailable: false,
        status: 'ERRORED',
        error: saga.undefinedMetamask,
      })
      .run();
  });

  it('should fail if account is undefined', () => {
    mockWeb3OnlyCurrentProvider();
    return expectSaga(saga.triggerAction)
      .withReducer(Web3.reducer)
      .put(Web3.creators.web3AddressFailed(undefinedWeb3Account))
      .dispatch(Web3.creators.web3AddressRequest())
      .hasFinalState({
        ...Web3.initialState,
        isAvailable: false,
        status: 'ERRORED',
        error: undefinedWeb3Account,
      })
      .run();
  });

  it('handles reducers when request is dispatched', () => {
    const address = '0x1';
    mockWeb3(address);
    return expectSaga(saga.triggerAction)
      .withReducer(Web3.reducer)
      .put(Web3.creators.web3AddressSuccess(address))
      .dispatch(Web3.creators.web3AddressRequest())
      .hasFinalState({
        address,
        isAvailable: true,
        status: 'RESOLVED',
      })
      .run();
  });
});
