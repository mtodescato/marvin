import { deployed, getAccount, at } from '../deployed';
import { getUserInfoFromCAddress } from '.';
import { createArray } from '../../../utils/global';
import { getUserContractAddress } from './contract';

import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
import DegreeCourse from '../../../bc/build/contracts/DegreeCourse.json';
import Student from '../../../bc/build/contracts/Student.json';
// import Exam from '../../../bc/build/contracts/Exam.json';

const studentContractAddress = () => getUserContractAddress(getAccount());

export const getStudentNumberOfTeachings = () => deployed(StudentFacade)
  .then(async inst => inst.getNumberOfTeachings.call(await studentContractAddress()))
  .then(Number);

const getTeachingInfo = index => deployed(StudentFacade)
  .then(async inst => inst.getTeaching.call(index, await studentContractAddress()));

export const getStudentTeachings = async size =>
  Promise.all(createArray(size)
    .map(index => getTeachingInfo(index)));

export const getStudentExams = async () => {
  const size = await getStudentNumberOfTeachings();
  const teachings = await getStudentTeachings(size);

  return teachings; // TODO: fix when professor can add exams
  // return teachings.map(teaching => deployed(StudentFacade)
  //   .then(inst => inst.getExam.call(teaching, studentContractAddress()))
  //   .then(examAddress => at(Exam, examAddress)
  //     .then(async exam => ({
  //       voto: String(await exam.getMark.call(studentContractAddress())),
  //       responsabile: 'Responsabile',
  //       nome: 'Nome Esame',
  //       cfu: '0',
  //       stato: 'passato',
  //       data: 'date',
  //     }))));
};

const getAverage = () => 18;

export const getStudentInfo = async () =>
  getUserInfoFromCAddress(await studentContractAddress())
    .then(async result => ({
      ...result,
      matricola: result.serial,
      media: await getAverage(),
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
    const stdC = await studentContractAddress();
    return inst.setDegreeCourse(degreeAddress, stdC, { from: getAccount() });
  });
