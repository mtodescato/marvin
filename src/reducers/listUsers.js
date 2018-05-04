import DuckModule from './duckModule';

export default DuckModule({
  store: 'list-users',
  initialState: {
    users: [],
    size: 0,
  },
  types: ['DELETE_ACTION', 'INITIALIZE'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.DELETE_ACTION:
        return {
          size: state.size - 1,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    deleteAction: () => ({ type: types.DELETE_ACTION }),
    initialize: () => ({ type: types.INITIALIZE }),
  }),
});
