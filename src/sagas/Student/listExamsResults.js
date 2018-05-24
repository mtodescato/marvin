import { put, takeLatest /* , call */ } from 'redux-saga/effects';
import { ListExamsResults } from '../../reducers';
// import { getStudentTeachings, getSubscribedExams } from '../web3calls/getter';

export function* runAction() {
  try {
    yield put(ListExamsResults.creators.listExamsResultsSuccess());
  } catch (e) {
    yield put(ListExamsResults.creators.listExamsResultsFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListExamsResults.types.LIST_EXAMS_RESULTS_REQUEST, runAction);
}
