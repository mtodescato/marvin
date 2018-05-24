import { put, takeLatest, call } from 'redux-saga/effects';
import { ListBookingExams } from '../../reducers';
import { subscribeToExam } from '../web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(subscribeToExam, payload.address);
    yield put(ListBookingExams.creators.subscribeSuccess(payload.address));
  } catch (e) {
    yield put(ListBookingExams.creators.subscribeFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListBookingExams.types.SUBSCRIBE_REQUEST, runAction);
}
