/*
 * file: web3calls.js
 * version: 0.1
 * type: javascript module
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: web3calls entry point, use this function for contract calls
 * changes:
 * * Denis Mazzucato    | 2018/04/11 | file creation
 */

import { deployed, getAccount } from './deployed';

/* deployCall,
 * * call a function contract, this function interact with blockchain
 * contract: json, contract json you want to instantiate
 * contractFunction: string, contract's function you want to exec
 * args: array, contractFunction's arguments
 * returnResult: func, function that transform standard result
 */
// TODO: no tests has been provided for this function
export default ({
  contract,
  contractFunction,
  args = undefined,
  returnResult = doNothing => doNothing,
}) => new Promise((resolve, reject) => {
  args.push({ from: getAccount() });
  deployed(contract)
    .then(instance => instance[contractFunction](...args))
    .then(result => resolve(returnResult(result)))
    .catch(err => reject(err));
});

/* stub version of deployed func
 * * this will be call if functionality isn't deployed yet in bc contracts
 * mockResult: json, mock of the result of transaction,
 * * if not present the transaction will be rejected
 * toBeFail: bool, you can constrain transaction to be reject
 */
export const stubDeployCall = ({
  returnResult = doNothing => doNothing,
  mockResult = undefined,
  toBeFail = false,
}) => new Promise((resolve, reject) => {
  if (toBeFail || mockResult === undefined) reject(new Error('transaction failed'));
  resolve(returnResult(mockResult));
});
