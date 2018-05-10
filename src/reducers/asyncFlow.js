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
    if (action.type.split('/')[1] !== store) return state;
    switch (action.type.split('_').pop().trim()) { // WORD_WORD_WORDAA => WORDAA
      case flowes.REQUEST:
        return { ...state, status: statuses.PENDING };
      case flowes.FAILED:
        return {
          ...state,
          status: statuses.ERRORED,
          error: action.payload.error || statuses.ERRORED,
        };
      case flowes.SUCCESS:
        return { ...state, status: statuses.RESOLVED };
      default:
        return state;
    }
  },
});
