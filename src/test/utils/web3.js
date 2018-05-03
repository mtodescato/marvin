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

export const createGlobalWindow = () => {
  // init a void object if not present
  global.window = global.window || {};
};

export const resetWeb3 = () => {
  createGlobalWindow();
  global.window.web3 = undefined;
};

// mock complete web3 given an address account
export const mockWeb3 = (account) => {
  resetWeb3();
  // inject address only if account is present
  if (account !== undefined) {
    global.window.web3 = {
      eth: { accounts: [account] },
    };
  }
  // create currentProvider inside window
  global.window.web3 = {
    ...global.window.web3,
    currentProvider: {
      send: () => {},
    },
  };
};

// mock only current provider web3
export const mockWeb3OnlyCurrentProvider = () => {
  mockWeb3();
};
