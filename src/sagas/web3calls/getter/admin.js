import { deployed } from '../deployed';
import { getUserInfoFromInt } from '.';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';
import AdminFacade from '../../../bc/build/contracts/AdminFacade.json';

export const getSize = () => deployed(ListUsers)
  .then(inst => inst.getNumberOfUsers.call()).then(Number);

const createArray = size => Array(size).fill().map((i, index) => index);
export const getUsers = size => createArray(size)
  .reduce(async (accumulator, index) => {
    accumulator.push(await getUserInfoFromInt(index));
    return accumulator;
  }, []);

export const deleteUser = address => deployed(AdminFacade)
  .then(inst => inst.removeUser(address));
