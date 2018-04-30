import { put, takeLatest, call } from 'redux-saga/effects';
import { addUser } from '../reducers';
import deployCall, { stubDeployCall } from './web3calls';
import { runAction } from './bookletInfo';

let mockResult = {};
let callWrapper = deployCall;

export const mockInjection = (mock) => {
  callWrapper = stubDeployCall;
  mockResult = mock;
};

export function* runAction({ payload })  {
  try {
    const result = yield call(callWrapper, ({
      contractFunction: 'addUser',
      args: [payload.user],
      mockResult,
    }));
    yield put(addUser.creators.addUserSuccess());
  } catch (e) {
    yield put(addUser.creators.addUserFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(addUser.types.ADD_USER_REQUEST, runAction);
}

