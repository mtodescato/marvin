import { deployed, getAccount, at } from '../deployed';
import { getUserInfoFromCAddress, getNumberOfTeachings, getTeachings, getCourseNameFromAddress } from '.';
// import { createArray } from '../../../utils/global';
import { getUserContractAddress } from './contract';

import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
// import DegreeCourse from '../../../bc/build/contracts/DegreeCourse.json';
import Student from '../../../bc/build/contracts/Student.json';
// import Exam from '../../../bc/build/contracts/Exam.json';
// import Teaching from '../../../bc/build/contracts/Teaching.json';

const studentContractAddress = () => getUserContractAddress(getAccount());

export const getActiveDegreeCourse = studentContract => at(Student, studentContract)
  .then(inst => inst.getDegreeCourse.call())
  .then(getCourseNameFromAddress);

export const setActiveDegreeCourse = degreeAddress => deployed(StudentFacade)
  .then(async (inst) => {
    const stdC = await studentContractAddress();
    return inst.setDegreeCourse(degreeAddress, stdC, { from: getAccount() });
  });


// export const getStudentNumberOfTeachings = () => deployed(StudentFacade)
//   .then(async (inst) => {
//     const studentAddress = await studentContractAddress();
//     return inst.getNumberOfTeachings.call(studentAddress);
//   }).then(Number);

// const getStudentTeachingInfo = index => deployed(StudentFacade)
//   .then(inst => inst.getTeaching.call(index, studentContractAddress()))
//   .then(teachingAddress => at(Teaching, teachingAddress))
//   .then(async teaching => ({
//     address: teaching.address,
//     nome: await teaching.getName.call(),
//     responsabile: await teaching.getReferenceProfessor.call(),
//     exam: await teaching.getExam.call(0),
//     stato: 'subscribed',
//   }));

// export const getStudentTeachings = async size =>
//   Promise.all(createArray(size)
//     .map(index => getStudentTeachingInfo(index)));

const addExamProperties = teaching => teaching;

export const getStudentTeachings = async () => {
  const course = await getActiveDegreeCourse(await studentContractAddress());
  if (course.name === 'N/A') return [];
  const size = await getNumberOfTeachings(course.address);
  const teachings = await getTeachings({ course: course.address, size });
  return teachings.map(addExamProperties);
};

export const getSubscribedExams = () => [];
export const getPassedExams = () => [];

const getAverage = () => 18;

export const getStudentInfo = async () =>
  getUserInfoFromCAddress(await studentContractAddress())
    .then(async result => ({
      ...result,
      matricola: result.serial,
      media: await getAverage(),
    }));
