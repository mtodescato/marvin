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
  it('#toCamelCase', () => {
    expect(Functions.toCamelCase('WORD_WORD')).to.equal('wordWord');
  });
  it('#toUpperCasse', () => {
    expect(Functions.toUpperCase('wordWord')).to.equal('WORD_WORD');
  });
  it('#throwError', () => {
    const msg = 'errore';
    expect(() => Functions.throwError(msg)).to.throw(Error, msg);
  });
  describe('#validator', () => {
    const a = { a: 1 };
    const mustA = init => ({ a: init.a || Functions.throwError(), ...init });
    const mustB = init => ({ b: init.b || Functions.throwError(), ...init });
    it('#addValidator', () => {
      const validator = Functions.validator();
      expect(() => validator.addValidator()).to.throw();
      expect(validator.addValidator(mustA).validators).to.include.members([mustA]);
    });
    it('#validate', () => {
      const validator = Functions.validator();
      expect(validator.validate(a)).to.equal(a);
      expect(validator.addValidator(mustA).validate(a)).to.eql(a);
      expect(() => validator.addValidator(mustB).validate(a)).to.throw();
    });
  });
});
