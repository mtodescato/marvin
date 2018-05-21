import { put, takeLatest, call } from 'redux-saga/effects';
import { ListStudyCourses } from '../../reducers';
import { getNumberOfDC, getDegreeCourse } from '../web3calls/getter';

export function* runAction(action) {
  try {
    const courses = [];
    const size = yield call(getNumberOfDC, action.payload.year);
    for (let i = 0; i < size; i += 1) {
      const course = yield call(getDegreeCourse, { year: action.payload.year, i });
      courses.push(course);
    }
    yield put(ListStudyCourses.creators.listStudyCoursesSuccess({ courses, size }));
  } catch (e) {
    yield put(ListStudyCourses.creators.listStudyCoursesFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListStudyCourses.types.LIST_STUDY_COURSES_REQUEST, runAction);
}
