import { validateAddress } from '../../../utils/global';
import { getUserContract, getUserContractAddress } from './contract';
import { deployed } from '../deployed';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';

const getUserSpecificInfo = (cAddress, infoType) => getUserContract(cAddress)
  .then(userInstance => userInstance[infoType].call());

// various instantiation of getUserSpecification
const getUserName = address => getUserSpecificInfo(address, 'getName').then(string => window.web3.toAscii(string));
const getUserSurname = address => getUserSpecificInfo(address, 'getSurname').then(string => window.web3.toAscii(string));
const getUserSocialNumber = address => getUserSpecificInfo(address, 'getSocialNumber').then(string => window.web3.toAscii(string));
const getUserSerial = address => getUserSpecificInfo(address, 'getSerial').then(Number);

export const getUserType = address => // real address
  deployed(ListUsers).then(inst => inst.getType.call(validateAddress(address))).then(Number);

const getUserInfoFromCAddress = async cAddress => ({
  name: await getUserName(cAddress),
  surname: await getUserSurname(cAddress),
  socialNumber: await getUserSocialNumber(cAddress),
  serial: await getUserSerial(cAddress),
  address: cAddress,
});

export const getUserInfo = address => getUserContractAddress(address)
  .then(cAddress => getUserInfoFromCAddress(cAddress))
  .then(async result => ({
    ...result,
    address,
    type: await getUserType(address),
  }));

export const intToUserAddress = int => deployed(ListUsers)
  .then(inst => inst.getUserAddress.call(int));
export const getUserInfoFromInt = async int => getUserInfo(await intToUserAddress(int));
