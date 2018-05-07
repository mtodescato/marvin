import { put, takeEvery, call } from 'redux-saga/effects';
import { Web3UserInfo } from '../reducers';
import { getUserInfo, getUserType } from './web3calls/getter';

export function* runAction({ payload }) {
  try {
    const userType = yield call(getUserType, payload.address);
    const data = yield call(getUserInfo, payload.address);
    yield put(Web3UserInfo.creators.web3UserInfoSuccess({ userType, data }));
  } catch (e) {
    yield put(Web3UserInfo.creators.web3UserInfoFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeEvery(Web3UserInfo.types.WEB_3_USER_INFO_REQUEST, runAction);
}
