import { put, takeLatest, call } from 'redux-saga/effects';
import { ListExams } from '../../reducers';
import { getExamsFromTeachingAdd } from '../web3calls/getter';

export function* runAction({ payload: { teaching } }) {
  try {
    const exams = yield call(getExamsFromTeachingAdd, teaching);
    yield put(ListExams.creators.listExamsFromTeachingSuccess({
      exams,
      size: exams.length,
    }));
  } catch (e) {
    yield put(ListExams.creators.listExamsFromTeachingFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListExams.types.LIST_EXAMS_FROM_TEACHING_REQUEST, runAction);
}
