import { put, takeLatest, call } from 'redux-saga/effects';
import { AddExam } from '../../reducers';
import { addExam } from '../web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(addExam, payload.user);
    yield put(AddExam.creators.addExamSuccess());
  } catch (e) {
    yield put(AddExam.creators.addExamFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(AddExam.types.ADD_EXAM_REQUEST, runAction);
}

