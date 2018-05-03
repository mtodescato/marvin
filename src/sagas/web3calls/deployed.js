/*
 * file: deployed.js
 * version: 0.1
 * type: javascript module
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: utils for web3calls module, don't use outside web3calls
 * changes:
 * * Denis Mazzucato    | 2018/04/11 | file creation
 */

import contract from 'truffle-contract';

export const undefinedWeb3Account = 'web3 is defined but accounts has wrong path under web3';

// return metamask accounts
export const getAccount = () => {
  const address = global.window.web3 && global.window.web3.eth ?
    global.window.web3.eth.accounts[0]
    : undefined;
  if (address === undefined || address === null) throw new Error(undefinedWeb3Account);
  return address;
};

// open the contractModule and return a promise with contractModule's instance
// TODO: no tests has been provided for this function
export const deployed = (contractModule) => {
  const wrapper = contract(contractModule);
  wrapper.setProvider(window.web3.currentProvider);
  return wrapper.deployed();
};
