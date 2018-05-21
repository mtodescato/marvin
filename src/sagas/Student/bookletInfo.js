import { put, takeLatest /* , call */ } from 'redux-saga/effects';
import { BookletInfo } from '../../reducers';
import {} from '../web3calls/getter';

export function* runAction() {
  try {
    yield put(BookletInfo.creators.listUsersSuccess({}));
  } catch (e) {
    yield put(BookletInfo.creators.listUsersFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeLatest(BookletInfo.types.BOOKLET_INFO_REQUEST, runAction);
}
