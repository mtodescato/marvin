import { deployed, at, getAccount } from '../deployed';
import { numberToCourseType, createArray } from '../../../utils/global';
import { getUserInfoFromInt, getUserInfoFromCAddress } from '.';
import { professorFacadeAddress, getUserContractAddress } from './contract';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';
import AdminFacade from '../../../bc/build/contracts/AdminFacade.json';
import DegreeCourse from '../../../bc/build/contracts/DegreeCourse.json';
import Teaching from '../../../bc/build/contracts/Teaching.json';

export const getSize = () => deployed(ListUsers)
  .then(inst => inst.getNumberOfUsers.call()).then(Number);

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

export const addAcademicYear = year => deployed(AdminFacade)
  .then(inst => inst.addAcademicYear(
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
    type: numberToCourseType((await course.getDegreeCourseType.call()).toNumber()),
  }));

export const getDegreeCourses = ({ year, size }) =>
  Promise.all(createArray(size)
    .map(index => getDegreeCourse({ year, i: index })));

export const addTeaching = teaching => deployed(AdminFacade)
  .then(async (inst) => {
    const professorAddress = await professorFacadeAddress();
    const address = await getUserContractAddress(teaching.responsible);
    return inst.addTeaching(
      teaching.course,
      address,
      teaching.name,
      professorAddress,
      { from: getAccount() },
    );
  });

export const getNumberOfTeachings = course => at(DegreeCourse, course)
  .then(inst => inst.getNumberOfTeachings.call())
  .then(Number);

export const getTeachingInfoFromAdd = teachingAdd => at(Teaching, teachingAdd)
  .then(async teaching => ({
    address: teaching.address,
    name: window.web3.toAscii(await teaching.getName.call()),
    responsibleName: (await getUserInfoFromCAddress(await teaching.getReferenceProfessor.call()))
      .name,
    responsible: await teaching.getReferenceProfessor.call(),
  }));

export const getTeaching = (course, index) => at(DegreeCourse, course)
  .then(inst => inst.getTeaching.call(index))
  .then(getTeachingInfoFromAdd);

export const getTeachings = ({ course, size }) =>
  Promise.all(createArray(size)
    .map(index => getTeaching(course, index)));

export const getCourseNameFromAddress = (address) => {
  if (Number(address) === 0) return 'N/A';
  return at(DegreeCourse, address)
    .then(async degree => ({
      address,
      name: window.web3.toAscii(await degree.getDegreeCourseName.call()),
    }));
};

export const getTeachingNameFromAddress = address => at(Teaching, address)
  .then(async teaching => ({
    address,
    name: window.web3.toAscii(await teaching.getName.call()),
  }));
