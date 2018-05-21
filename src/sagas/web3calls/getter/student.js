import { deployed, getAccount } from '../deployed';
import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
import { getUserContract } from './contract';


export const getActiveDegreeCourse = studentContract => deployed(StudentFacade)
  .then(inst => inst.getDegreeCourse.call(studentContract))
  .then(degreeAdd => degreeAdd.getDegreeCourseName.call())
  .then(window.web3.toAscii);

export const setActiveDegreeCourse = degreeAddress => deployed(StudentFacade)
  .then(async (inst) => {
    const stdC = await getUserContract(getAccount());
    return inst.setDegreeCourse(degreeAddress, stdC, { from: getAccount() });
  });
