import { put, takeLatest, call } from 'redux-saga/effects';
import { AddAcademycYear } from '../reducers';
import { addAcademycYear } from './web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(addAcademycYear, payload.academycYear);
    yield put(AddAcademycYear.creators.addAcademycYearSuccess());
  } catch (e) {
    yield put(AddAcademycYear.creators.addAcademycYearFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(AddAcademycYear.types.ADD_ACADEMYC_YEAR_REQUEST, runAction);
}

