import { deployed, at } from '../deployed';

import User from '../../../bc/build/contracts/User.json';
import Student from '../../../bc/build/contracts/Student.json';
import Professor from '../../../bc/build/contracts/Professor.json';
import Admin from '../../../bc/build/contracts/Admin.json';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';

// getter Contract user from contract address
export const getUserContract = address => at(User, address);
export const getStudentContract = address => at(Student, address);
export const getProfessorContract = address => at(Professor, address);
export const getAdminContract = address => at(Admin, address);

// getter contract address from user address
export const getUserContractAddress = address =>
  deployed(ListUsers).then(inst => inst.getUser.call(address));