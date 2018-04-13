/*
 * file: index.test.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: all the implementations of DuckModule
 * * must have instance of this suite when the test script will exec
 * * if implementation don't have it check the error in src/reducers/index.js
 * changes:
 * * Denis Mazzucato    | 2018/04/13 | file creation
 */

import { createStore } from 'redux';
import combineReducers, * as Reducers from '../../reducers/';

describe('Reducers general test suite', () => {
  // no one reducer can take this dummy action
  const actionNeverTake = 'ACTION_THAT_NOBODY_WILL_EVER_TAKE_0123';
  // state examples
  const states = [
    { // states[0]
      root: 'root',
    },
  ];

  Object.keys(Reducers)
    .filter(key => key !== 'default') // default export isn't a reducer
    .forEach((key) => {
      const element = Reducers[key];
      describe(`duck module ${key} will have basic properties`, () => {
        it('reducer must be a property of all reducers', () => {
          expect(element).to.have.property('reducer');
        });
        it('reducer return the state passed if does not take care of an action', () => {
          expect(element.reducer(states[0], actionNeverTake, {}))
            .to.deep.equal(states[0]);
        });
        it('reducer return the initial state if state passed is undefined', () => {
          expect(element.reducer(undefined, actionNeverTake, {}))
            .to.deep.equal(element.initialState);
        });
        Object.keys(element.types).forEach((type) => {
          const action = element.types[type];
          it(`reducer do not return undefined for ${type} action`, () => {
            // eslint-disable-next-line no-unused-expressions
            expect(element.reducer(undefined, action, ...element))
              .to.not.be.undefined;
          });
        });
        it('root selectors', () => {
          expect(element).to.have.property('selectors')
            .that.have.property('root');
          expect(element.selectors.root({ root: 'root' }))
            .to.have.property('root', 'root');
        });
        it('have a trace in combineReducers', () => {
          const store = createStore(combineReducers);
          expect(store.getState()).to.have.property(element.store, element.initialState);
        });
      });
    });
});
