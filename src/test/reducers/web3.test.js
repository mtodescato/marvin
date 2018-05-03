import { createStore } from 'redux';
import { Web3 } from '../../reducers';

describe('Web3 reducer test suite', () => {
  const store = createStore(Web3.reducer);
  it('should add user address and set isAvailable to true when success action is dispatched', () => {
    const address = '0x1';
    store.dispatch(Web3.creators.web3AddressSuccess(address));
    const state = store.getState();
    expect(state).to.have.property('address', '0x1');
    expect(state).to.have.property('isAvailable', true);
  });
});
