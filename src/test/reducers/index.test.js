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
import { toCamelCase } from '../../utils/global';
import combineReducers, * as Reducers from '../../reducers/';

describe('Reducers general test suite', () => {
  // no one reducer can take this dummy action
  const actionNeverTake = { type: 'ACTION_THAT_NOBODY_WILL_EVER_TAKE_0123' };
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
        it('reducer return the state passed if does not take care of an action', () => {
          expect(element.reducer(states[0], actionNeverTake, {}))
            .to.deep.equal(states[0]);
        });

        it('reducer return the initial state if state passed is undefined', () => {
          expect(element.reducer(undefined, actionNeverTake, {}))
            .to.deep.equal(element.initialState);
        });

        // for each action the reducer's call don't return undefined
        Object.keys(element.types).forEach((type) => {
          const action = { type: element.types[type] };
          it(`reducer do not return undefined for ${type} action`, () => {
            // eslint-disable-next-line no-unused-expressions
            expect(element.reducer(undefined, action, ...element))
              .to.not.be.undefined;
          });
        });

        // for each action it must to be a correspondent creator
        Object.keys(element.types).forEach((type) => {
          it(`action ${type} have a trace in action creators`, () => {
            expect(element.creators)
              .to.have.property(toCamelCase(type));
            expect(element.creators[toCamelCase(type)]())
              .to.have.property('type', element.types[type]);
          });
        });

        // check if in the combineReducers it was added the current reducer
        it('have a trace in combineReducers', () => {
          const store = createStore(combineReducers);
          expect(store.getState()).to.have.property(element.store, element.initialState);
        });
      });
    });
});
