import { deployed } from '../deployed';
// import { numberToCourseType } from '../../../utils/global';

import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
// import Student from '../../../bc/build/contracts/Student.json';

export const getActiveDegreeCourse = studentContract => deployed(StudentFacade)
  .then(inst => inst.getDegreeCourse.call(studentContract))
  .then(degreeAdd => degreeAdd.getDegreeCourseName.call())
  .then(window.web3.toAscii);

export const forLint = 0;
