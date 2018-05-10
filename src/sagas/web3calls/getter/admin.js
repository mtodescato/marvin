import { deployed } from '../deployed';
import { getUserInfoFromInt } from '.';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';

export const getSize = () => deployed(ListUsers)
  .then(inst => inst.getNumberOfUsers.call()).then(Number);

const createArray = size => Array(size).fill().map((i, index) => index);
export const getUsers = size => createArray(size)
  .reduce((accumulator, index) => accumulator.push(getUserInfoFromInt(index)), []);
