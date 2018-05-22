import { deployed, getAccount, at } from '../deployed';
import { getUserInfoFromCAddress } from '.';
import { createArray } from '../../../utils/global';
import { getUserContractAddress } from './contract';

import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
import DegreeCourse from '../../../bc/build/contracts/DegreeCourse.json';
import Student from '../../../bc/build/contracts/Student.json';

export const getStudentNumberOfTeachings = () => deployed(StudentFacade)
  .then(inst => inst.getNumberOfTeachings.call())
  .then(Number);

const getTeachingInfo = index => deployed(StudentFacade)
  .then(async (inst) => {
    const cAddress = await getUserContractAddress(getAccount());
    return inst.getTeaching.call(index, cAddress);
  });

export const getStudentTeachings = async size =>
  Promise.all(createArray(size)
    .map(index => getTeachingInfo(index)));

const getAvarage = () => 18;

export const getStudentInfo = async () =>
  getUserInfoFromCAddress(await getUserContractAddress(getAccount()))
    .then(async result => ({
      ...result,
      matricola: result.serial,
      media: await getAvarage(),
    }));

export const getActiveDegreeCourse = studentContract => at(Student, studentContract)
  .then(inst => inst.getDegreeCourse.call())
  .then((degreeAdd) => {
    if (Number(degreeAdd) === 0) return 'N/A';
    return at(DegreeCourse, degreeAdd)
      .then(degree => degree.getDegreeCourseName.call())
      .then(window.web3.toAscii);
  });

export const setActiveDegreeCourse = degreeAddress => deployed(StudentFacade)
  .then(async (inst) => {
    const stdC = await getUserContractAddress(getAccount());
    return inst.setDegreeCourse(degreeAddress, stdC, { from: getAccount() });
  });
