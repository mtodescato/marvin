// TODO: remove this when creating a true implementation of DuckModel

import DuckModel from './duckModule';

export default DuckModel({
  store: 'fake-reducer',
  types: ['ACTION_TYPE'],
  initialState: { fake: 0 },
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.ACTION_TYPE:
        return {
          ...state,
          fake: state.fake + 1,
        };
      default:
        return state;
    }
  },
});
