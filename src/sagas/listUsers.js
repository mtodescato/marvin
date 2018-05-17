import { put, takeLatest, call } from 'redux-saga/effects';
import { ListUsers } from '../reducers';
import { getSize, getUsers } from './web3calls/getter';

export function* runAction() {
  try {
    const size = yield call(getSize);
    const users = yield call(getUsers, size);
    yield put(ListUsers.creators.listUsersSuccess({ users, size }));
  } catch (e) {
    yield put(ListUsers.creators.listUsersFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeLatest(ListUsers.types.LIST_USERS_REQUEST, runAction);
}
