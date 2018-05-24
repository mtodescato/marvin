import { fork, all } from 'redux-saga/effects';
import * as bookletInfo from './Student/bookletInfo';
import * as addUser from './Admin/addUser';
import * as web3 from './web3';
import * as web3UserInfo from './web3UserInfo';
import * as listUsers from './Admin/listUsers';
import * as deleteUser from './Admin/deleteUser';
import * as addCourse from './Admin/addCourse';
import * as addAcademicYear from './Admin/addAcademicYear';
import * as listProfessors from './Admin/listProfessors';
import * as listStudyCourses from './Admin/listStudyCourses';
import * as addTeaching from './Admin/addTeaching';
import * as listTeachings from './Admin/listTeachings';
import * as listCoursesStudent from './Student/listCourses';
import * as courseSubscribe from './Student/courseSubscribe';
import * as listBookingExams from './Student/listBookingExams';

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
    fork(listCoursesStudent.triggerAction),
    fork(courseSubscribe.triggerAction),
    fork(listBookingExams.triggerAction),
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
  listCoursesStudent,
  courseSubscribe,
  listBookingExams,
};
