import { deployed, getAccount } from '../deployed';
import { getUserContractAddress, studentFacadeAddress } from '.';

import ProfessorFacade from '../../../bc/build/contracts/ProfessorFacade.json';

export const professorContractAddress = () => getUserContractAddress(getAccount());

export const addExam = exam => deployed(ProfessorFacade)
  .then(async (inst) => {
    const stdC = await professorContractAddress();
    const stuFacC = await studentFacadeAddress();
    return inst.insertExam(exam.teachingAddress, exam.date, stdC, stuFacC, { from: getAccount() });
  });
