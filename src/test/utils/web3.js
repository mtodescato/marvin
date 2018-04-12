/*
 * file: web3.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: test utils for web3
 * changes:
 * * Denis Mazzucato    | 2018/04/11 | file creation
 */

import FakeProvider from 'web3-fake-provider';

// mock web3 given an address account
export const mockWeb3 = (account) => {
  global.window.web3 = {
    eth: { accounts: [account] },
    currentProvider: new FakeProvider(),
  };
};

export default mockWeb3; // FIXME: remove this line when added another function
