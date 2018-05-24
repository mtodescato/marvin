import { deployed, getAccount, at } from '../deployed';
import { getUserInfoFromCAddress, getNumberOfTeachings, getTeachings, getCourseNameFromAddress } from '.';
import { createArray } from '../../../utils/global';
import { getUserContractAddress } from './contract';

import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
import Teaching from '../../../bc/build/contracts/Teaching.json';
import Student from '../../../bc/build/contracts/Student.json';
import Exam from '../../../bc/build/contracts/Exam.json';

const studentContractAddress = () => getUserContractAddress(getAccount());

export const getActiveDegreeCourse = studentContract => at(Student, studentContract)
  .then(inst => inst.getDegreeCourse.call())
  .then(getCourseNameFromAddress);

export const setActiveDegreeCourse = degreeAddress => deployed(StudentFacade)
  .then(async (inst) => {
    const stdC = await studentContractAddress();
    return inst.setDegreeCourse(degreeAddress, stdC, { from: getAccount() });
  });

const getPassedTeachingAddress = index => deployed(StudentFacade)
  .then(async (inst) => {
    const stdC = await studentContractAddress();
    return inst.getTeaching.call(index, stdC);
  });


const getNumberOfPassedTeachings = () => deployed(StudentFacade)
  .then(async (inst) => {
    const stdC = await studentContractAddress();
    return inst.getNumberOfTeachings.call(stdC);
  }).then(Number);

export const getPassedTeachings = async () =>
  Promise.all(createArray(await getNumberOfPassedTeachings())
    .map(index => getPassedTeachingAddress(index)));

export const addExamToPassedTeaching = async (teaching) => {
  const stdC = await studentContractAddress();
  return deployed(StudentFacade)
    .then(async inst => inst.getExam.call(teaching.address, stdC))
    .then(examAdd => at(Exam, examAdd)
      .then(async exam => ({
        ...teaching,
        data: window.web3.toAscii(await exam.getDate.call()),
        voto: Number(await exam.getMark.call(stdC)),
      })));
};

export const getStudentInfo = async () =>
  getUserInfoFromCAddress(await studentContractAddress())
    .then(async result => ({
      ...result,
      matricola: result.serial,
    }));

const isSubscribedToExam = (examAddress, index, stdC) => at(Exam, examAddress)
  .then(exam => exam.getStudentSubscribed.call(index))
  .then(add => add === stdC);

const isSubscribedToTeaching = async (teachingAddress, stdC) => {
  const results = await at(Teaching, teachingAddress)
    .then(teaching => teaching.getExam.call(0))
    .then(examAdd => at(Exam, examAdd))
    .then(async exam => ({ exam, size: await exam.getNumberOfStudents.call() }))
    .then(({ exam, size }) => Promise.all(createArray(Number(size))
      .map(index => isSubscribedToExam(exam.address, index, stdC))));
  return Boolean(results.filter(i => i).length);
};

export const subscribeToExam = examAddress => deployed(StudentFacade)
  .then(async (inst) => {
    const stdC = await studentContractAddress();
    const add = await at(Teaching, examAddress).then(teachingInst => teachingInst.getExam.call(0));
    return inst.subscribeToExam(stdC, add, { from: getAccount() });
  });

export const getExamFromTeaching = teachingAdd => at(Teaching, teachingAdd)
  .then(async (teaching) => {
    const examAdd = await teaching.getExam.call(0);
    const exam = await at(Exam, examAdd);
    const stdC = await studentContractAddress();
    const isSubscribed = await isSubscribedToTeaching(teaching.address, stdC);
    let markStatus = 'pending';
    let mark = 'undefined';
    try {
      mark = Number(await exam.getMark.call(stdC));
      try {
        const status = Boolean(await exam.getMarkStatus.call(stdC));
        markStatus = status ? 'accepted' : 'rejected';
      } catch (e) {
        markStatus = 'published';
      }
    } catch (e) {
      markStatus = isSubscribed ? 'subscribed' : 'pending';
    }
    return {
      teachingAddress: teachingAdd,
      examAddress: examAdd,
      name: window.web3.toAscii(await teaching.getName.call()),
      responsible: await teaching.getReferenceProfessor.call(),
      date: window.web3.toAscii(await exam.getDate.call()),
      markStatus,
      mark,
    };
  });

export const getStudentTeachings = async () => {
  const stdC = await studentContractAddress();
  const course = await getActiveDegreeCourse(stdC);
  if (course.name === 'N/A') return [];
  const size = await getNumberOfTeachings(course.address);
  let teachings = await getTeachings({ course: course.address, size });
  teachings = await Promise.all(teachings.map(teaching => getExamFromTeaching(teaching.address)));
  return teachings.map(item => ({
    ...item,
    address: item.teachingAddress, // for retro-compatibility
    nome: item.name,
    responsabile: item.responsible,
    stato: item.markStatus,
    data: item.date,
    voto: item.mark,
  }));
};

export const getSubscribedExams = async () => {
  const teachings = await getStudentTeachings();
  const stdC = await studentContractAddress();
  const subscribeds = await Promise.all(createArray(teachings.length)
    .map(index => isSubscribedToTeaching(teachings[index].address, stdC)));
  return teachings
    .filter((teaching, index) => subscribeds[index])
    .map(teaching => teaching.address);
};
