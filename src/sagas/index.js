import { fork, all } from 'redux-saga/effects';
import * as bookletInfo from './bookletInfo';
import * as addUser from './addUser';
import * as web3 from './web3';
import * as web3UserInfo from './web3UserInfo';
import * as listUsers from './listUsers';
import * as deleteUser from './deleteUser';
import * as addCourse from './addCourse';
import * as addAcademicYear from './addAcademicYear';
import * as listProfessors from './listProfessors';
import * as listStudyCourses from './listStudyCourses';
import * as addTeaching from './addTeaching';
import * as listTeachings from './listTeachings';

export default function* rootSaga() {
  yield all([
    fork(bookletInfo.triggerAction),
    fork(addUser.triggerAction),
    fork(web3.triggerAction),
    fork(web3UserInfo.triggerAction),
    fork(listUsers.triggerAction),
    fork(deleteUser.triggerAction),
    fork(addCourse.triggerAction),
    fork(addAcademicYear.triggerAction),
    fork(listProfessors.triggerAction),
    fork(listStudyCourses.triggerAction),
    fork(addTeaching.triggerAction),
    fork(listTeachings.triggerAction),
  ]);
}

export {
  bookletInfo,
  addUser,
  web3,
  web3UserInfo,
  listUsers,
  deleteUser,
  addCourse,
  addAcademicYear,
  listProfessors,
  listStudyCourses,
  addTeaching,
  listTeachings,
};
