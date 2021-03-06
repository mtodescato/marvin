import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-users',
  initialState: {
    users: [],
    size: 0,
    statusAction: 'READY',
  },
  actions: ['LIST_USERS', 'DELETE'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_USERS_SUCCESS:
        return {
          ...state,
          size: action.payload.size,
          users: action.payload.users,
        };
      case types.DELETE_SUCCESS:
        return {
          ...state,
          size: state.size - 1,
          users: state.users.filter(item => item.address !== action.payload.address),
          statusAction: 'RESOLVED',
        };
      case types.DELETE_FAILED:
        return {
          ...state,
          statusAction: 'RESOLVED',
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listUsersRequest: () => ({ type: types.LIST_USERS_REQUEST }),
    listUsersSuccess: ({ users, size }) => ({
      type: types.LIST_USERS_SUCCESS,
      payload: { users, size },
    }),
    listUsersFailed: error => ({ type: types.LIST_USERS_FAILED, error: true, payload: { error } }),
    deleteRequest: address => ({ type: types.DELETE_REQUEST, payload: { address } }),
    deleteSuccess: address => ({ type: types.DELETE_SUCCESS, payload: { address } }),
    deleteFailed: error => ({ type: types.DELETE_FAILED, error: true, payload: { error } }),
  }),
});
