import { deployed, getAccount, at } from '../deployed';
import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
import DegreeCourse from '../../../bc/build/contracts/DegreeCourse.json';
import Student from '../../../bc/build/contracts/Student.json';
import { getUserContractAddress } from './contract';

export const getActiveDegreeCourse = studentContract => at(Student, studentContract)
  .then(inst => {
    console.log(inst.address);
    return inst.getDegreeCourse.call();
  })
  .then((degreeAdd) => {
    console.log(degreeAdd);
    if(Number(degreeAdd) === 0) return 'N/A'
    return at(DegreeCourse, degreeAdd)
    .then(degree => degree.getDegreeCourseName.call())
    .then(window.web3.toAscii);
  });

// export const getActiveDegreeCourse = studentContract => deployed(StudentFacade)
//   .then(inst => inst.getDegreeCourse.call(studentContract))
//   .then(degreeAdd => at(DegreeCourse, degreeAdd)
//     .then(degree => degree.getDegreeCourseName.call())
//     .then(window.web3.toAscii));

export const setActiveDegreeCourse = degreeAddress => deployed(StudentFacade)
  .then(async (inst) => {
    const stdC = await getUserContractAddress(getAccount());
    return inst.setDegreeCourse(degreeAddress, stdC, { from: getAccount() });
  });
