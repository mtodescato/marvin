import { put, takeLatest, call } from 'redux-saga/effects';
import { ListExams } from '../../reducers';
import {
  getNumberOfTeachings,
  getTeachings,
  getDegreeCourses,
  getNumberOfDC,
  professorContractAddress,
  getExamsFromTeachingsAdd,
} from '../web3calls/getter';

export function* runAction({ payload: { year } }) {
  try {
    // numero totale di degree course
    const coursesSize = yield call(getNumberOfDC, year);
    // corsi in tutta l'universita
    const courses = yield call(getDegreeCourses, ({ year, size: coursesSize }));
    const teachings = [];
    let size = 0;
    // per ogni corso
    for (let i = 0; i < courses.length; i += 1) {
      // prendo il numero di teachings in quel corso
      size = yield call(getNumberOfTeachings, courses[i].ID);
      // prendo tutti i teachings di quel corso
      const partOfTeachings = yield call(getTeachings, ({ course: courses[i].ID, size }));
      // inserisco nell'array globale i teachings di questo corso
      partOfTeachings.forEach(el => teachings.push({ ...el, course: courses[i].name }));
    }
    const professorAddress = yield call(professorContractAddress);

    const exams = yield call(getExamsFromTeachingsAdd, teachings
      .filter(item => item.responsible === professorAddress)
      .map(teaching => teaching.address));
    yield put(ListExams.creators.listExamsSuccess({
      exams,
      size: exams.length,
    }));
  } catch (e) {
    yield put(ListExams.creators.listExamsFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListExams.types.LIST_EXAMS_REQUEST, runAction);
}
