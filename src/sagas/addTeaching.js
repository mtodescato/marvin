import { put, takeLatest, call } from 'redux-saga/effects';
import { AddTeaching } from '../reducers';
import { addTeaching } from './web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(addTeaching, payload.teaching);
    yield put(AddTeaching.creators.addTeachingSuccess());
  } catch (e) {
    yield put(AddTeaching.creators.addTeachingFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(AddTeaching.types.ADD_TEACHING_REQUEST, runAction);
}

