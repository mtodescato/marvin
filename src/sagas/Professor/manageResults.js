import { put, takeLatest, call } from 'redux-saga/effects';
import { ManageResults } from '../../reducers';
import { getResultsFromExamAdd } from '../web3calls/getter';

export function* runAction({ payload: { examAddress } }) {
  try {
    const students = yield call(getResultsFromExamAdd, examAddress);

    yield put(ManageResults.creators.manageResultsSuccess({
      students,
      size: students.length,
    }));
  } catch (e) {
    yield put(ManageResults.creators.manageResultsFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ManageResults.types.MANAGE_RESULTS_REQUEST, runAction);
}
