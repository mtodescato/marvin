import { deployed, getAccount } from '../deployed';
import { getUserInfoFromInt } from '.';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';
import AdminFacade from '../../../bc/build/contracts/AdminFacade.json';

export const getSize = () => deployed(ListUsers)
  .then(inst => inst.getNumberOfUsers.call()).then(Number);

const createArray = size => Array(size).fill().map((i, index) => index);
export const getUsers = async size =>
  Promise.all(createArray(size)
    .map(index => getUserInfoFromInt(index)));

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
    2018, // FIXIT:
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
