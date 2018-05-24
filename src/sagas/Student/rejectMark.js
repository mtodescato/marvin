import { put, takeLatest, call } from 'redux-saga/effects';
import { ListExamsResults } from '../../reducers';
import { rejectMark } from '../web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(rejectMark, payload.address);
    yield put(ListExamsResults.creators.rejectSuccess(payload.address));
    yield put(ListExamsResults.creators.listExamsResultsRequest());
  } catch (e) {
    yield put(ListExamsResults.creators.rejectFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListExamsResults.types.REJECT_REQUEST, runAction);
}
