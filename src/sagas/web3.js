import { put, takeLatest, call } from 'redux-saga/effects';
import { web3 } from '../reducers';
import deployCall, { stubDeployCall } from './web3calls';

let mockResult = {};
let callWrapper = deployCall;

export const mockInjection = (mock) => {
  callWrapper = stubDeployCall;
  mockResult = mock;
};

export function* runAction() {
  try {
    const result = yield call(callWrapper, ({
      contractFunction: 'web3',
      mockResult,
    }));
    yield put(web3.creators.addUserSuccess(result));
  } catch (e) {
    yield put(web3.creators.addUserFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(web3.types.BOOKLET_INFO_REQUEST, runAction);
}
