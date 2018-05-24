import { put, takeLatest /* , call */ } from 'redux-saga/effects';
import { ListExamsResults } from '../../reducers';
// import { getStudentTeachings, getSubscribedExams } from '../web3calls/getter';

export function* runAction() {
  try {
    yield put(ListExamsResults.creators.rejectSuccess());
  } catch (e) {
    yield put(ListExamsResults.creators.rejectFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListExamsResults.types.REJECT_REQUEST, runAction);
}
