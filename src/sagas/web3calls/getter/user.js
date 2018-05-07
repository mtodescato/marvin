import { getUserContract, getUserContractAddress } from './contract';
import { deployed } from '../deployed';

import ListUsers from '../../../bc/build/contracts/ListUsers.json';

const getUserSpecificInfo = (address, infoType) =>
  // return the promise with the user contract address, given a valid user address
  getUserContractAddress(address).then(contractAddress =>
    // return an user instance, given a valid user contract address
    getUserContract(contractAddress).then(userInstance =>
      userInstance[infoType].call()));
// various instantiation of getUserSpecification
const getUserName = address => getUserSpecificInfo(address, 'getName').then(string => window.web3.toAscii(string));
const getUserSurname = address => getUserSpecificInfo(address, 'getSurname').then(string => window.web3.toAscii(string));
const getUserSocialNumber = address => getUserSpecificInfo(address, 'getSocialNumber').then(string => window.web3.toAscii(string));
const getUserSerial = address => getUserSpecificInfo(address, 'getSerial').then(Number);

export const getUserType = address =>
  deployed(ListUsers).then(inst => inst.getType.call(address)).then(Number);
export const getUserInfo = async address => ({
  name: await getUserName(address),
  surname: await getUserSurname(address),
  socialNumber: await getUserSocialNumber(address),
  serial: await getUserSerial(address),
});
