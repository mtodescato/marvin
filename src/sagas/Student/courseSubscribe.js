import { put, takeLatest, call } from 'redux-saga/effects';
import { ListCoursesStudent } from '../../reducers';
import { setActiveDegreeCourse, getActiveDegreeCourse, getUserContractAddress } from '../web3calls/getter';
import { getAccount } from '../web3calls';


export function* runAction({ payload }) {
  try {
    yield call(setActiveDegreeCourse, payload.courseAdd);
    const studentCAddress = yield call(getUserContractAddress, getAccount());
    const courseName = yield call(getActiveDegreeCourse, studentCAddress);
    yield put(ListCoursesStudent.creators.subscribeSuccess(courseName));
  } catch (e) {
    yield put(ListCoursesStudent.creators.subscribeFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListCoursesStudent.types.SUBSCRIBE_REQUEST, runAction);
}
