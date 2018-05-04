/*
 * file: asyncFlow.js
 * version: 0.1
 * type: javascript reducer
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings: reducer for the async flow, this reducer can't be instantiate, is like abstract
 * changes:
 * * Denis Mazzucato    | 2018/04/27 | file creation
 */

import DuckModule from './duckModule';

export default ({ store, initialState, actions }) => DuckModule({
  store,
  consts: {
    statuses: ['READY', 'PENDING', 'RESOLVED', 'ERRORED'],
    flowes: ['REQUEST', 'SUCCESS', 'FAILED'],
  },
  types: actions.reduce((accumulator, action) => [
    ...accumulator,
    `${action}_REQUEST`,
    `${action}_SUCCESS`,
    `${action}_FAILED`,
  ], []),
  initialState: ({ statuses }) => ({
    ...initialState,
    status: statuses.READY,
  }),
}).extend({
  reducer: (state, action, { flowes, statuses }) => {
    switch (action.type.split('_').pop().trim()) { // WORD_WORD_WORDAA => WORDAA
      case flowes.REQUEST:
        return { ...state, status: statuses.PENDING };
      case flowes.FAILED:
        return { ...state, status: statuses.ERRORED };
      case flowes.SUCCESS:
        return { ...state, status: statuses.RESOLVED };
      default:
        return state;
    }
  },
});
