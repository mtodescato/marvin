import { put, takeLatest, call } from 'redux-saga/effects';
import { ListCoursesStudent } from '../../reducers';
import { getNumberOfDC, getDegreeCourse, getActiveDegreeCourse, getUserContractAddress } from '../web3calls/getter';
import { getAccount } from '../web3calls';

export function* runAction(action) {
  try {
    console.log('init');
    const studentCAddress = yield call(getUserContractAddress, getAccount());
    console.log(studentCAddress);
    let activeCourseName
    try {
      activeCourseName = yield call(getActiveDegreeCourse, studentCAddress);
    } catch(e) { console.log(e)}
    console.log(activeCourseName);
    const courses = [];
    const size = yield call(getNumberOfDC, action.payload.year);
    console.log(size);
    for (let i = 0; i < size; i += 1) {
      const course = yield call(getDegreeCourse, { year: action.payload.year, i });
      console.log(course);
      courses.push(course);
    }
    yield put(ListCoursesStudent.creators.listCoursesStudentSuccess({
      activeCourseName,
      courses,
      size,
    }));
  } catch (e) {
    yield put(ListCoursesStudent.creators.listCoursesStudentFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListCoursesStudent.types.LIST_COURSES_REQUEST, runAction);
}
