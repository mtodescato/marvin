import { put, takeEvery, call } from 'redux-saga/effects';
import Web3 from 'web3';
import { Web3 as Web3Reducer } from '../reducers';
import { getAccount } from './web3calls/deployed';

export const undefinedMetamask = 'Mist/MetaMask\'s provider isn\'t be recognized, please use it before run marvin';

export const getWeb3 = () => new Promise((resolve, reject) => {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  let result;
  if (typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider.
    result = new Web3(window.web3.currentProvider);
    global.window.web3 = result; // global var setted
    resolve(result);
  } else {
    reject(Error(undefinedMetamask));
  }
});

export function* runAction() {
  try {
    yield call(getWeb3);
    const address = getAccount();
    yield put(Web3Reducer.creators.web3AddressSuccess(address));
    // yield put(Web3UserInfo.creators.web3UserInfoRequest(address));
  } catch (e) {
    yield put(Web3Reducer.creators.web3AddressFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeEvery(Web3Reducer.types.WEB_3_ADDRESS_REQUEST, runAction);
}
