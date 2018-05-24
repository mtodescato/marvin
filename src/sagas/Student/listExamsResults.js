import { put, takeLatest, call } from 'redux-saga/effects';
import { ListExamsResults } from '../../reducers';
import { getStudentTeachings } from '../web3calls/getter';

export function* runAction() {
  try {
    const teachings = (yield call(getStudentTeachings)).filter(item => item.markStatus === 'subscribed');
    yield put(ListExamsResults.creators.listExamsResultsSuccess({
      exams: teachings,
      size: teachings.length,
    }));
  } catch (e) {
    yield put(ListExamsResults.creators.listExamsResultsFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListExamsResults.types.LIST_EXAMS_RESULTS_REQUEST, runAction);
}
