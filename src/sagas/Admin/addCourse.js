import { put, takeLatest, call } from 'redux-saga/effects';
import { AddCourse } from '../../reducers';
import { addCourse } from '../web3calls/getter';

export function* runAction({ payload }) {
  try {
    yield call(addCourse, payload.course);
    yield put(AddCourse.creators.addCourseSuccess());
  } catch (e) {
    yield put(AddCourse.creators.addCourseFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(AddCourse.types.ADD_COURSE_REQUEST, runAction);
}

