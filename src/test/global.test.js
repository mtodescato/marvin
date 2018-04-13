/*
 * file: global.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings:
 * changes:
 * * Denis Mazzucato    | 2018/04/13 | file creation
 */

import * as Functions from '../utils/global';

describe('global utils test suite', () => {
  it('toCamelCase', () => {
    expect(Functions.toCamelCase('WORD_WORD')).to.equal('wordWord');
  });
});
