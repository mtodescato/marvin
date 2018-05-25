import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'manage-result',
  initialState: {
    students: [],
    size: 0,
  },
  actions: ['MANAGE_RESULT', 'ADD_MARK'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.MANAGE_RESULT_SUCCESS:
        return {
          ...state,
          size: action.payload.size,
          students: action.payload.students,
        };
      case types.ADD_MARK_SUCCESS:
        return {
          ...state,
          size: state.size - 1,
          students: state.students
            .filter(student => student.address !== action.payload.stdAddress),
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    manageResultRequest: examAddress => ({
      type: types.MANAGE_RESULT_REQUEST,
      payload: { examAddress },
    }),
    manageResultSuccess: ({ students, size }) => ({
      type: types.MANAGE_RESULT_SUCCESS,
      payload: { students, size },
    }),
    manageResultFailed: error => ({
      type: types.MANAGE_RESULT_FAILED,
      error: true,
      payload: { error },
    }),
    addMarkRequest: ({ stdAddress, examAddress }) => ({
      type: types.ADD_MARK_REQUEST,
      payload: { stdAddress, examAddress },
    }),
    addMarkSuccess: ({ stdAddress, examAddress }) => ({
      type: types.ADD_MARK_SUCCESS,
      payload: { stdAddress, examAddress },
    }),
    addMarkFailed: error => ({
      type: types.ADD_MARK_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
