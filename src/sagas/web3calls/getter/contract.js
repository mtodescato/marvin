import { validateAddress } from '../../../utils/global';

import { deployed, at } from '../deployed';

import User from '../../../bc/build/contracts/User.json';
import Student from '../../../bc/build/contracts/Student.json';
import Professor from '../../../bc/build/contracts/Professor.json';
import Admin from '../../../bc/build/contracts/Admin.json';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';

// getter Contract user from contract address
const errMsg = 'contract address isn\'t valid';
export const getUserContract = address => at(User, validateAddress(address, errMsg));
export const getStudentContract = address => at(Student, validateAddress(address, errMsg));
export const getProfessorContract = address => at(Professor, validateAddress(address, errMsg));
export const getAdminContract = address => at(Admin, validateAddress(address, errMsg));

// getter contract address from user address
const errMsg1 = 'user address isn\' valid';
export const getUserContractAddress = address =>
  deployed(ListUsers).then(inst => inst.getUser.call(validateAddress(address, errMsg1)));
