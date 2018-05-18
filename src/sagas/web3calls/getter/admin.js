import { deployed, at, getAccount } from '../deployed';
import { getUserInfoFromInt } from '.';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';
import AdminFacade from '../../../bc/build/contracts/AdminFacade.json';
import DegreeCourse from '../../../bc/build/contracts/DegreeCourse.json';
import { numberToCourseType } from '../../../utils/global';

export const getSize = () => deployed(ListUsers)
  .then(inst => inst.getNumberOfUsers.call()).then(Number);

const createArray = size => Array(size).fill().map((i, index) => index);
export const getUsers = async size =>
  Promise.all(createArray(size)
    .map(index => getUserInfoFromInt(index)));

export const getStudents = size => getUsers(size)
  .then(users => users.filter(user => user.role === 0));
export const getAdmins = size => getUsers(size)
  .then(users => users.filter(user => user.role === 2));
export const getProfessors = size => getUsers(size)
  .then(users => users.filter(user => user.role === 1));

export const deleteUser = address => deployed(AdminFacade)
  .then(inst => inst.removeUser(address, { from: getAccount() }));

export const addUser = user => deployed(AdminFacade)
  .then(inst => inst.addUser(
    user.name,
    user.surname,
    'codiceFiscale', // FIXIT:
    123332, // FIXIT:
    user.address,
    user.role,
    { from: getAccount() },
  ));

export const addCourse = course => deployed(AdminFacade)
  .then(inst => inst.addDegreeCourse(
    course.academicYear,
    course.name,
    course.president,
    course.type,
    { from: getAccount() },
  ));

export const addAcademycYear = year => deployed(AdminFacade)
  .then(inst => inst.addAcademycYear(
    year,
    { from: getAccount() },
  ));

export const getNumberOfDC = year => deployed(AdminFacade)
  .then(inst => inst.getNumberOfDC.call(year))
  .then(n => n.toNumber());

export const getDegreeCourse = ({ year, i }) => deployed(AdminFacade)
  .then(inst => inst.getDegreeCourse.call(year, i))
  .then(dAddress => ({ course: at(DegreeCourse, dAddress), dAddress }))
  .then(async ({ course, dAddress }) => ({
    ID: dAddress,
    name: window.web3.toAscii(await course.getDegreeCourseName.call()),
    president: window.web3.toAscii(await course.getDegreeCoursePresident.call()),
    courseType: numberToCourseType((await course.getDegreeCourseType.call()).toNumber()),
  }));

