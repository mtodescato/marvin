import DuckModule from '../../reducers/duckModule';

describe('DuckModule test suite', () => {
  /* testing a DuckModular args less
   * test if it has correct acces to props as:
   * store, types, initialState, selectors
   */
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

  /* testing DuckModule with all args
   * test if it has correct acces to props as:
   * store, types, initialState, selectors
   * with the expected results
   */
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
