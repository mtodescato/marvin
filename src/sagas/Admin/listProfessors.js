import { put, takeLatest, call } from 'redux-saga/effects';
import { ListProfessors } from '../reducers';
import { getSize, getProfessors } from './web3calls/getter';

export function* runAction() {
  try {
    let size = yield call(getSize);
    const professors = yield call(getProfessors, size);
    size = professors.length;
    yield put(ListProfessors.creators.listProfessorsSuccess({ professors, size }));
  } catch (e) {
    yield put(ListProfessors.creators.listProfessorsFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeLatest(ListProfessors.types.LIST_PROFESSORS_REQUEST, runAction);
}
