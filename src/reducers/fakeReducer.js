// TODO: remove this when creating a true implementation of DuckModel

import DuckModule from './duckModule';

export default DuckModule({
  store: 'fake-reducer',
  types: ['ACTION_TYPE1', 'ACTION_TYPE2'],
  initialState: { fake: 1 },
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.ACTION_TYPE1:
        return {
          ...state,
          fake: state.fake + 1,
        };
      case types.ACTION_TYPE2:
        return {
          ...state,
          fake: state.fake + 2,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    actionType1: () => ({ type: types.ACTION_TYPE1 }),
    actionType2: () => ({ type: types.ACTION_TYPE2 }),
  }),
  // selectors: ...
});
