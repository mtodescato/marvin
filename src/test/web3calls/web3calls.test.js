/*
 * file: web3calls.test.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings:
 * changes:
 * * Denis Mazzucato    | 2018/04/11 | file creation
 */

// import deployCall from '../../sagas/web3calls/web3calls';
import { stubDeployCall } from '../../sagas/web3calls/web3calls';

describe('deployCall test suite', () => {
  // testing stub func
  it('stubDeployCall resolve the fake call', () => {
    const returnResult = obj => obj.key;
    const mockResult = { key: 'value' };
    return stubDeployCall({ returnResult, mockResult }).then((result) => {
      expect(result).to.equal('value');
    });
  });

  // FIXME: don't know how to test deploy call function without migrating a fake contract
});
