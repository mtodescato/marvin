import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'add-user',
  initialState: {},
  actions: ['ADD_USER'],
}).extend({
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
