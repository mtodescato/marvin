import DuckModule from './duckModule';

export default DuckModule({
  store: 'user-reducer',
  types: ['LOGIN_USER'],
  initialState: {
    data: {
      name: 'Giovanni',
      address: '0x0',
    },
    type: 'student',
  },
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LOGIN_USER:
        return {
          ...state,
          type: 'student',
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    loginUser: () => ({ type: types.LOGIN_USER }),
  }),
});
