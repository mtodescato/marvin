import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'manage-results',
  initialState: {
    students: [],
    size: 0,
  },
  actions: ['MANAGE_RESULTS', 'ADD_MARK'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.MANAGE_RESULTS_SUCCESS:
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
    manageResultsRequest: examAddress => ({
      type: types.MANAGE_RESULTS_REQUEST,
      payload: { examAddress },
    }),
    manageResultsSuccess: ({ students, size }) => ({
      type: types.MANAGE_RESULTS_SUCCESS,
      payload: { students, size },
    }),
    manageResultsFailed: error => ({
      type: types.MANAGE_RESULTS_FAILED,
      error: true,
      payload: { error },
    }),
    addMarkRequest: (stdAddress, examAddress, mark) => ({
      type: types.ADD_MARK_REQUEST,
      payload: { stdAddress, examAddress, mark },
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
