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
  const address = window.web3.eth.accounts[0];
  if (address) return address;
  throw new Error(undefinedWeb3Account);
};

const openContract = ({ contractModule, address, method }) => {
  if (method !== 'at' && method !== 'deployed') throw new Error('undefined method');
  const wrapper = contract(contractModule);
  wrapper.setProvider(window.web3.currentProvider);
  return method === 'at' ? wrapper[method](address) : wrapper[method]();
};

// open the contractModule and return a promise with contractModule's instance
// TODO: no tests has been provided for this function
export const deployed = contractModule => openContract({ contractModule, method: 'deployed' });

export const at = (contractModule, address) => openContract({ contractModule, address, method: 'at' });
