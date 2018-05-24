import { combineReducers } from 'redux';
// import all reducers
import BookletInfo from './Student/bookletInfo';
import AddUser from './Admin/addUser';
import Web3 from './web3';
import Web3UserInfo from './web3UserInfo';
import MenuEntries from './menuEntries';
import ListUsers from './Admin/listUsers';
import AddCourse from './Admin/addCourse';
import AddAcademicYear from './Admin/addAcademicYear';
import ListProfessors from './Admin/listProfessors';
import ListStudyCourses from './Admin/listStudyCourses';
import AddTeaching from './Admin/addTeaching';
import ListTeachings from './Admin/listTeachings';
import ListCoursesStudent from './Student/listCourses';
import ListBookingExams from './Student/listBookingExams';

export default combineReducers({
  [BookletInfo.store]: BookletInfo.reducer,
  [AddUser.store]: AddUser.reducer,
  [Web3.store]: Web3.reducer,
  [Web3UserInfo.store]: Web3UserInfo.reducer,
  [MenuEntries.store]: MenuEntries.reducer,
  [ListUsers.store]: ListUsers.reducer,
  [AddCourse.store]: AddCourse.reducer,
  [AddAcademicYear.store]: AddAcademicYear.reducer,
  [ListProfessors.store]: ListProfessors.reducer,
  [ListStudyCourses.store]: ListStudyCourses.reducer,
  [AddTeaching.store]: AddTeaching.reducer,
  [ListTeachings.store]: ListTeachings.reducer,
  [ListCoursesStudent.store]: ListCoursesStudent.reducer,
  [ListBookingExams.store]: ListBookingExams.reducer,
});

// export all reducers
export {
  BookletInfo,
  AddUser,
  Web3,
  Web3UserInfo,
  MenuEntries,
  ListUsers,
  AddCourse,
  AddAcademicYear,
  ListProfessors,
  ListStudyCourses,
  AddTeaching,
  ListTeachings,
  ListCoursesStudent,
  ListBookingExams,
};
