import { deployed, at } from '../deployed';

import User from '../../../bc/build/contracts/User.json';
import Student from '../../../bc/build/contracts/Student.json';
import Professor from '../../../bc/build/contracts/Professor.json';
import Admin from '../../../bc/build/contracts/Admin.json';

import AdminFacade from '../../../bc/build/contracts/AdminFacade.json';
import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
import ProfessorFacade from '../../../bc/build/contracts/ProfessorFacade.json';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';

// getter Contract user from contract address
export const getUserContract = address => at(User, address);
export const getStudentContract = address => at(Student, address);
export const getProfessorContract = address => at(Professor, address);
export const getAdminContract = address => at(Admin, address);

// getter contract address from user address
export const getUserContractAddress = address =>
  deployed(ListUsers).then(inst => inst.getUser.call(address));

// facade's address, for ownerships
export const professorFacadeAddress = () => deployed(ProfessorFacade).then(inst => inst.address);
export const studentFacadeAddress = () => deployed(StudentFacade).then(inst => inst.address);
export const adminFacadeAddress = () => deployed(AdminFacade).then(inst => inst.address);
