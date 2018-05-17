import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'list-professors',
  initialState: {
    professors: [],
    size: 0,
  },
  actions: ['LIST_PROFESSORS'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_PROFESSORS_SUCCESS:
        return {
          size: action.payload.size,
          users: action.payload.users,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listProfessorsRequest: () => ({ type: types.LIST_PROFESSORS_REQUEST }),
    listProfessorsSuccess: ({ professors, size }) => ({
      type: types.LIST_PROFESSORS_SUCCESS,
      payload: { professors, size },
    }),
    listProfessorsFailed: error => ({
      type: types.LIST_PROFESSORS_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
