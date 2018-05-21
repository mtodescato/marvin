import { deployed, getAccount } from '../deployed';
import { getUserInfoFromCAddress } from '.';
import { createArray } from '../../../utils/global';

import StudentFacade from '../../../bc/build/contracts/StudentFacade.json';
import { getUserContract } from './contract';

export const getNumberOfTeachings = () => deployed(StudentFacade)
  .then(inst => inst.getNumberOfTeachings.call())
  .then(Number);

export const getTeachingInfo = index => deployed(StudentFacade)
  .then(async (inst) => {
    const cAddress = await getUserContract(getAccount());
    return inst.getTeaching.call(index, cAddress);
  });

export const getTeachings = async size =>
  Promise.all(createArray(size)
    .map(index => getTeachingInfo(index)));

export const getAvarage = () => 18;

export const getStudentInfo = async () =>
  getUserInfoFromCAddress(await getUserContract(getAccount()))
    .then(async result => ({
      ...result,
      matricola: result.serial,
      media: await getAvarage(),
    }));
