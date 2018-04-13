/*
 * file: index.test.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings:
 * changes:
 * * Denis Mazzucato    | 2018/04/13 | file creation
 */

import rootSaga, * as Sagas from '../../sagas/';

describe('sagas general test suite', () => {
  // not very necessary but increasing code coverage
  it('rootSagas default struct', () => {
    const it = rootSaga();
    expect(it).to.have.property('next');
    expect(it.next())
      .to.have.property('value')
      .that.have.property('ALL')
      .that.be.an('array');
    const end = it.next();
    expect(end).to.have.property('value', undefined);
    expect(end).to.have.property('done', true);
  });

  // general test for all saga's basic properties
  Object.keys(Sagas)
    .filter(key => key !== 'default') // default export isn't a saga
    .forEach((key, index) => {
      const element = Sagas[key];

      describe(`saga '${key}' has basic properties`, () => {
        it('saga has triggerAction method', () => {
          // eslint-disable-next-line no-unused-expressions
          expect(element).to.have.property('triggerAction').to.be.not.undefined;
        });
        it('saga has runAction method', () => {
          // eslint-disable-next-line no-unused-expressions
          expect(element).to.have.property('runAction').to.be.not.undefined;
        });

        it('has a trace in root sagas', () => {
          const it = rootSaga();
          expect(it.next().value.ALL).to.have.lengthOf.above(index)
            .that.have.lengthOf.below(Object.keys(Sagas).length);
        });
      });
    });
});
