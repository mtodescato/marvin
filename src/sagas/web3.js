import { put, takeEvery } from 'redux-saga/effects';
import { Web3 as Web3Reducer, Web3UserInfo } from '../reducers';
import { getAccount } from './web3calls/deployed';

export function* runAction() {
  yield put(Web3UserInfo.creators.web3UserInfoRequest(getAccount()));
}

export function* triggerAction() {
  yield takeEvery(Web3Reducer.types.WEB_3_ADDRESS_REQUEST, runAction);
}
