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
    expect(Functions).to.have.property('toCamelCase');
    expect(Functions.toCamelCase('WORD_WORD')).to.equal('wordWord');
    expect(Functions.toCamelCase('WORD_3_WORD')).to.equal('word3Word');
  });
  it('#toUpperCasse', () => {
    expect(Functions).to.have.property('toUpperCase');
    expect(Functions.toUpperCase('wordWord')).to.equal('WORD_WORD');
    expect(Functions.toUpperCase('word3Word')).to.equal('WORD_3_WORD');
  });
  it('#throwError', () => {
    expect(Functions).to.have.property('throwError');
    const msg = 'errore';
    expect(() => Functions.throwError(msg)).to.throw(Error, msg);
  });
  describe('#validator', () => {
    it('#validator', () => {
      expect(Functions).to.have.property('validator');
    });
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
  it('#reduce', () => {
    expect(Functions).to.have.property('reduce');
    const obj = {
      a: 1,
      b: 2,
      x: 3,
      c: 4,
    };
    const reduceArray = ['a', 'b', 'c'];
    const reducedObj = Functions.reduce(obj, reduceArray);
    expect(reducedObj).to.have.property('a', 1);
    expect(reducedObj).to.have.property('b', 2);
    expect(reducedObj).to.have.property('c', 4);
    expect(reducedObj).not.to.have.property('x');
    const reducedObj1 = Functions.reduce(obj, ['z'], 'default value');
    expect(reducedObj1).to.have.property('z', 'default value');
    expect(reducedObj1).not.to.have.property('a');
    expect(reducedObj1).not.to.have.property('b');
    expect(reducedObj1).not.to.have.property('c');
    expect(reducedObj1).not.to.have.property('x');
  });
});
