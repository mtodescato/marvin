/*
 * file: duckModule.test.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings:
 * changes:
 * * Denis Mazzucato    | 2018/04/12 | file creation
 */

import DuckModule from '../../reducers/duckModule';

describe('DuckModule test suite', () => {
  // testing DuckModule with no args
  describe('default init', () => {
    const defaultDuck = DuckModule({});
    it('correct prop store', () => {
      expect(defaultDuck).to.have.property('store', 'default');
    });
    it('correct prop types', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(defaultDuck)
        .to.have.property('types')
        .that.be.an('object')
        .that.be.empty;
    });
    it('correct prop initialState', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(defaultDuck).to.have.property('initialState')
        .that.be.an('object')
        .that.be.empty;
    });
    it('correct prop selectors', () => {
      expect(defaultDuck).to.have.property('selectors')
        .that.have.property('root');
      expect(defaultDuck.selectors.root({ root: 'root' }))
        .to.have.property('root', 'root');
    });
  });
  // testing DuckModule with all args
  describe('DuckModule with all args', () => {
    const duck = DuckModule({
      namespace: 'root',
      store: 'root',
      types: ['ROOT'],
      const: { root: 'root' },
      initialState: { root: 'root' },
    });
    it('correct prop store', () => {
      expect(duck).to.have.property('store', 'root');
    });
    it('correct prop types', () => {
      expect(duck).to.have.property('types')
        .that.have.property('ROOT', 'root/root/ROOT');
    });
    it('correct prop initialState', () => {
      expect(duck).to.have.property('initialState')
        .that.have.property('root', 'root');
    });
    it('correct prop selectors', () => {
      expect(duck).to.have.property('selectors')
        .that.have.property('root');
      expect(duck.selectors.root({ root: 'root' }))
        .to.have.property('root', 'root');
    });
  });
});
