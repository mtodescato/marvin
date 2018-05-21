import { deployed, getAccount } from '../deployed';
import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';


export const getActiveDegreeCourse = studentContract => deployed(StudentFacade)
  .then(inst => inst.getDegreeCourse.call(studentContract))
  .then(degreeAdd => degreeAdd.getDegreeCourseName.call())
  .then(window.web3.toAscii);

export const setActiveDegreeCourse = (studentContract, degreeAddress) => deployed(StudentFacade)
  .then(inst => inst.setDegreeCourse(degreeAddress, studentContract, { from: getAccount() }));
