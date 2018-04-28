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
 * * Denis Mazzucato    | 2018/04/27 | addded validation func from utils package
 */

import Duck from 'extensible-duck';
import { validator, reduce } from '../utils/global';

const validateProps = props => validator().addValidator(init => ({
  namespace: 'marvin',
  store: 'default',
  types: [],
  consts: {},
  initialState: {},
  ...init,
})).addValidator(init => reduce(init, ['namespace', 'store', 'types', 'consts', 'initialState']))
  .validate(props);

/* base class for modular duck, redux best practice
 * namespace: string, used as a prefix for the types
 * store: string, used as a prefix for the types and as a redux state key
 * types: array, list of action types
 * consts: array, constants you may need to declare
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
