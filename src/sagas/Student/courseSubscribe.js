import { put, takeLatest, call } from 'redux-saga/effects';
import { ListCoursesStudent } from '../../reducers';
import { setActiveDegreeCourse } from '../web3calls/getter';


export function* runAction({ payload }) {
  try {
    yield call(setActiveDegreeCourse, payload.courseAdd);
    yield put(ListCoursesStudent.creators.listStudyCoursesSuccess());
  } catch (e) {
    yield put(ListCoursesStudent.creators.listStudyCoursesFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListCoursesStudent.types.LIST_SUBSCRIBE_REQUEST, runAction);
}
