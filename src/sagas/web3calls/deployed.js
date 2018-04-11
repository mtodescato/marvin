/*
 * file: deployed.js
 * version: 0.1
 * type: javascript
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: don't use outside web3calls, utils for web3calls module
 * changes: 
 * * Denis Mazzucato | 2018/04/11 | file creation
 */

const contract = require('truffle-contract');

// return metamask accounts
export function getAccount() {
  return window.web3.eth.accounts[0];
}

// open the contractModuel and return a promise with contractModule's instance
export function deployed(contractModule) {
  const wrapper = contract(contractModule);
  wrapper.setProvider(window.web3.currentProvider);
  return wrapper.deployed();
}
