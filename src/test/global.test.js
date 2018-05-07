
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

  it('#validateAddress', () => {
    const msg1 = '1';
    expect(Functions.validateAddress('0x627306090abab3a6e1400e9345bc60c78a8bef57', msg1))
      .equal('0x627306090abab3a6e1400e9345bc60c78a8bef57');
    expect(() => Functions.validateAddress('0x627306090abab3a6e1400e9345bc60c78a8bef57a', msg1))
      .to.throw(Error, msg1);
    expect(() => Functions.validateAddress('0x627306090abab3a6e1400e9345bc60c78a8bef5'))
      .to.throw(Error, 'Address must be valid');
    expect(() => Functions.validateAddress('sx627306090abab3a6e1400e9345bc60c78a8bef57'))
      .to.throw(Error, 'Address must be valid');
    expect(() => Functions.validateAddress('02627306090abab3a6e1400e9345bc60c78a8bef57'))
      .to.throw(Error, 'Address must be valid');
  });
});
