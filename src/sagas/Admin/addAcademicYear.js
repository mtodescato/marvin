import { put, takeLatest, call } from 'redux-saga/effects';
import { AddAcademicYear } from '../reducers';
import { addAcademicYear } from './web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(addAcademicYear, payload.academicYear);
    yield put(AddAcademicYear.creators.addAcademicYearSuccess());
  } catch (e) {
    yield put(AddAcademicYear.creators.addAcademicYearFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(AddAcademicYear.types.ADD_ACADEMIC_YEAR_REQUEST, runAction);
}

