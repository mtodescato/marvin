/*
 * file: deployed.test.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings:
 * changes:
 * * Denis Mazzucato    | 2018/04/12 | file creation
 */

import { mockWeb3 } from '../utils/web3';
// import { deployed } from '../../sagas/web3calls/deployed';
import { getAccount } from '../../sagas/web3calls/deployed';

describe('deployed unit test suite', () => {
  // metamask account address
  const account = '0x47d33b27bb249a2dbab4c0612bf9caf4c1950855';

  // mocking web3
  mockWeb3(account);

  it('getAccount method return the correct account', () => {
    expect(getAccount()).to.equal(account);
  });

  // FIXME: don't know how to test deployed function without migrating a fake contract
});
