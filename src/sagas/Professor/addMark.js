import { put, takeLatest, call } from 'redux-saga/effects';
import { ManageResults } from '../../reducers';
import { addMark } from '../web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(addMark, payload);
    yield put(ManageResults.creators.addMarkSuccess(payload));
    yield put(ManageResults.creators.manageResultsRequest(payload.examAddress));
  } catch (e) {
    yield put(ManageResults.creators.addMarkFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ManageResults.types.ADD_MARK_REQUEST, runAction);
}
