import { deployed, getAccount, at } from '../deployed';
import { getUserContractAddress, studentFacadeAddress, getTeachingInfoFromAdd } from '.';
import { createArray } from '../../../utils/global';

import ProfessorFacade from '../../../bc/build/contracts/ProfessorFacade.json';
import Teaching from '../../../bc/build/contracts/Teaching.json';
import Exam from '../../../bc/build/contracts/Exam.json';

export const professorContractAddress = () => getUserContractAddress(getAccount());

export const addExam = exam => deployed(ProfessorFacade)
  .then(async (inst) => {
    const stdC = await professorContractAddress();
    const stuFacC = await studentFacadeAddress();
    return inst.insertExam(exam.teachingAddress, exam.date, stdC, stuFacC, { from: getAccount() });
  });

const getExamsFromTeachingAdd = teachingAdd => at(Teaching, teachingAdd)
  .then(async (teaching) => {
    const size = await teaching.getNumberOfExams.call();
    return Promise.all(createArray(size).map(index => teaching.getExam.call(index)));
  }).then(examsAdd => Promise.all(examsAdd.map(examAdd => at(Exam, examAdd)
    .then(async exam => ({
      ...(await getTeachingInfoFromAdd(teachingAdd)),
      examAddress: exam.address,
      date: window.web3.toAscii(await exam.getDate.call()),
      studentsNumber: Number(await exam.getNumberOfStudents.call()),
    })))));

export const getExamsFromTeachingsAdd = async (teachingsAdd) => {
  const exams = await Promise.all(teachingsAdd
    .map(teachingAdd => getExamsFromTeachingAdd(teachingAdd)));
  return exams.reduce((acc, item) => acc.concat(...item), []); // flattern array
};
