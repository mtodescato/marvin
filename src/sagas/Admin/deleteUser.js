import { put, takeLatest, call } from 'redux-saga/effects';
import { ListUsers } from '../../reducers';
import { deleteUser } from '../web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(deleteUser, payload.address);
    yield put(ListUsers.creators.deleteSuccess(payload.address));
  } catch (e) {
    yield put(ListUsers.creators.deleteFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeLatest(ListUsers.types.DELETE_REQUEST, runAction);
}
