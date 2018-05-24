import { put, takeLatest, call } from 'redux-saga/effects';
import { ListBookingExams } from '../../reducers';
import { getStudentTeachings, getSubscribedExams } from '../web3calls/getter';

export function* runAction() {
  try {
    let exams = yield call(getStudentTeachings);
    const subscribedExams = yield call(getSubscribedExams);
    console.log(subscribedExams);
    for (let i = 0; i < exams.length; i += 1) {
      exams = exams.filter(exam => subscribedExams.indexOf(exam.address) === -1);
    }
    yield put(ListBookingExams.creators.listBookingExamsSuccess(exams));
  } catch (e) {
    yield put(ListBookingExams.creators.listBookingExamsFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListBookingExams.types.LIST_BOOKING_EXAMS_REQUEST, runAction);
}
