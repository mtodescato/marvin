import { combineReducers } from 'redux';
// import all reducers
import BookletInfo from './bookletInfo';
import AddUser from './addUser';
import Web3 from './web3';
import Web3UserInfo from './web3UserInfo';
import MenuEntries from './menuEntries';
import ListUsers from './listUsers';
import AddCourse from './addCourse';
import AddAcademycYear from './addAcademycYear';
import ListProfessors from './listProfessors';
import ListStudyCourses from './listStudyCourses';

export default combineReducers({
  [BookletInfo.store]: BookletInfo.reducer,
  [AddUser.store]: AddUser.reducer,
  [Web3.store]: Web3.reducer,
  [Web3UserInfo.store]: Web3UserInfo.reducer,
  [MenuEntries.store]: MenuEntries.reducer,
  [ListUsers.store]: ListUsers.reducer,
  [AddCourse.store]: AddCourse.reducer,
  [AddAcademycYear.store]: AddAcademycYear.reducer,
  [ListProfessors.store]: ListProfessors.reducer,
  [ListStudyCourses.store]: ListStudyCourses.reducer,
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
  AddAcademycYear,
  ListProfessors,
  ListStudyCourses,
};
