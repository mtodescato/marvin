import DuckModule from './duckModule';

export default DuckModule({
  store: 'menu-entries',
  initialState: {
    id: 0,
  },
  types: ['CHANGE_ACTIVE'],
}).extend({
  reducer: (state, { type, payload }, { types }) => {
    switch (type) {
      case types.CHANGE_ACTIVE:
        return { ...state, id: payload.id };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    changeActive: id => ({
      type: types.CHANGE_ACTIVE,
      payload: { id },
    }),
  }),
});
