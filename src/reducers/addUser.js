import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'add-user',
  initialState: {
    isSuccess: false,
    isFailed: false,
  },
  actions: ['ADD_USER'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.ADD_USER_SUCCESS:
        return {
          ...state,
          isSuccess: true,
          isFailed: false,
        };
      case types.ADD_USER_FAILED:
        return {
          ...state,
          isSuccess: false,
          isFailed: true,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    addUserRequest: user => ({
      type: types.ADD_USER_REQUEST,
      payload: { user },
    }),
    addUserSuccess: () => ({
      type: types.ADD_USER_SUCCESS,
    }),
    addUserFailed: error => ({
      type: types.ADD_USER_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
