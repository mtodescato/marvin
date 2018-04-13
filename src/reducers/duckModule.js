/*
 * file: duckModule.js
 * version: 0.1
 * type: javascript module
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: base class for duck reducers, extend this for implements new reducers
 * * use DuckModule({}) instead of DuckModule()
 * changes:
 * * Denis Mazzucato    | 2018/04/12 | file creation
 */

import Duck from 'extensible-duck';

const validateProps = (init) => {
  const validInit = {};
  validInit.namespace = 'namespace' in init ? init.namespace : 'marvin';
  validInit.store = 'store' in init ? init.store : 'default';
  validInit.types = 'types' in init ? init.types : [];
  validInit.const = 'const' in init ? init.const : {};
  validInit.initialState = 'initialState' in init ? init.initialState : {};
  return validInit;
};

/* base class for modular duck, redux best practice
 * namespace: string, used as a prefix for the types
 * store: string, used as a prefix for the types and as a redux state key
 * types: array, list of action types
 * const: array, constants you may need to declare
 * initialState: State, state passed to the reducer when the state is undefined
 */
export default init => new Duck({
  ...validateProps(init),
  reducer: (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
  selectors: {
    root: state => state,
  },
});
