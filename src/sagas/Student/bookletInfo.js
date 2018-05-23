import { put, takeLatest, call } from 'redux-saga/effects';
import { BookletInfo } from '../../reducers';
import { getStudentInfo, getStudentTeachings } from '../web3calls/getter';

export function* runAction() {
  try {
    const user = yield call(getStudentInfo);
    const exams = yield call(getStudentTeachings);
    const booklet = { user, exams };
    yield put(BookletInfo.creators.bookletInfoSuccess(booklet));
  } catch (e) {
    yield put(BookletInfo.creators.bookletInfoFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeLatest(BookletInfo.types.BOOKLET_INFO_REQUEST, runAction);
}
