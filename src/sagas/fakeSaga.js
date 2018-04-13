// TODO: remove this when creating a true implementation of DuckModel

import { put, takeLatest } from 'redux-saga/effects';
import { FakeReducer } from '../reducers';

export function* runAction() {
  yield put(FakeReducer.creators.actionType2());
}

export function* triggerAction() {
  yield takeLatest(FakeReducer.types.ACTION_TYPE1, runAction);
}
