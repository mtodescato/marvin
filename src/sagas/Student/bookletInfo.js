import { put, takeLatest, call } from 'redux-saga/effects';
import { BookletInfo } from '../../reducers';
import { getStudentInfo, getStudentTeachings, getPassedTeachings, addExamToPassedTeaching } from '../web3calls/getter';

export function* runAction() {
  try {
    const user = yield call(getStudentInfo);
    const exams = yield call(getStudentTeachings);
    const passedAddresses = yield call(getPassedTeachings);
    for (let i = 0; i < exams.length; i += 1) {
      if (passedAddresses.filter(add => add === exams[i].address).length) {
        exams[i] = yield call(addExamToPassedTeaching, exams[i]);
      }
    }
    const booklet = {
      user,
      exams: exams.map(exam => ({ ...exam, responsabile: exam.responsibleName })),
    };
    yield put(BookletInfo.creators.bookletInfoSuccess(booklet));
  } catch (e) {
    yield put(BookletInfo.creators.bookletInfoFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeLatest(BookletInfo.types.BOOKLET_INFO_REQUEST, runAction);
}
