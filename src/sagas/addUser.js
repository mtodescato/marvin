import { put, takeLatest, call } from 'redux-saga/effects';
import { AddUser } from '../reducers';
import deployCall, { stubDeployCall } from './web3calls';


let mockResult = {};
let callWrapper = deployCall;

export const mockInjection = (mock) => {
  callWrapper = stubDeployCall;
  mockResult = mock;
};

export function* runAction({ payload }) {
  try {
    yield call(callWrapper, ({
      contractFunction: 'addUser',
      args: [payload.user],
      mockResult,
    }));
    yield put(AddUser.creators.addUserSuccess());
  } catch (e) {
    yield put(AddUser.creators.addUserFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(AddUser.types.ADD_USER_REQUEST, runAction);
}

