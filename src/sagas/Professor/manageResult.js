import { put, takeLatest, call } from 'redux-saga/effects';
import { ManageResult } from '../../reducers';
import { getResultsFromExamAdd } from '../web3calls/getter';

export function* runAction({ payload: { examAddress } }) {
  try {
    const students = yield call(getResultsFromExamAdd, examAddress);

    yield put(ManageResult.creators.manageResultSuccess({
      students,
      size: students.length,
    }));
  } catch (e) {
    yield put(ManageResult.creators.manageResultFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ManageResult.types.MANAGE_RESULT_REQUEST, runAction);
}
