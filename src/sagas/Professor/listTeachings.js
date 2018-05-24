import { put, takeLatest, call } from 'redux-saga/effects';
import { ListTeachingsProfessor } from '../../reducers';
import {
  getNumberOfTeachings,
  getTeachings,
  getDegreeCourses,
  getNumberOfDC,
  professorContractAddress,
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
    yield put(ListTeachingsProfessor.creators.listTeachingsSuccess({
      teachings: teachings.filter(item => item.responsible === professorAddress),
      size: teachings.length,
    }));
  } catch (e) {
    yield put(ListTeachingsProfessor.creators.listTeachingsFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(ListTeachingsProfessor.types.LIST_TEACHINGS_REQUEST, runAction);
}
