import { put, takeLatest, call } from 'redux-saga/effects';
import { ListExamsResults } from '../../reducers';
import { acceptMark } from '../web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(acceptMark, payload.address);
    yield put(ListExamsResults.creators.acceptSuccess(payload.address));
    yield put(ListExamsResults.creators.listExamsResultsRequest());
  } catch (e) {
    yield put(ListExamsResults.creators.acceptFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListExamsResults.types.ACCEPT_REQUEST, runAction);
}
