import { put, takeLatest, call } from 'redux-saga/effects';
import { AddUser } from '../reducers';
import { addUser } from './web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(addUser(payload.user));
    yield put(AddUser.creators.addUserSuccess());
  } catch (e) {
    yield put(AddUser.creators.addUserFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(AddUser.types.ADD_USER_REQUEST, runAction);
}

