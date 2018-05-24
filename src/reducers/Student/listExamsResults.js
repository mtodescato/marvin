import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-exams-results-student',
  initialState: {
    exams: [],
    size: 0,
  },
  actions: ['LIST_EXAMS_RESULTS', 'ACCEPT', 'REJECT'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_EXAMS_RESULTS_SUCCESS:
        return {
          ...state,
          exams: action.payload.exams || [],
          size: action.payload.size,
        };
      case types.ACCEPT_SUCCESS:
      case types.REJECT_SUCCESS:
        return {
          ...state,
          exams: state.exams.filter(exam => exam.address !== action.payload.address),
          size: state.size - 1,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listExamsResultsRequest: () => ({
      type: types.LIST_EXAMS_RESULTS_REQUEST,
    }),
    listExamsResultsSuccess: ({ exams, size }) => ({
      type: types.LIST_EXAMS_RESULTS_SUCCESS,
      payload: { exams, size },
    }),
    listExamsResultsFailed: error => ({
      type: types.LIST_EXAMS_RESULTS_FAILED,
      error: true,
      payload: { error },
    }),
    acceptRequest: address => ({
      type: types.ACCEPT_REQUEST,
      payload: { address },
    }),
    acceptSuccess: address => ({
      type: types.ACCEPT_SUCCESS,
      payload: { address },
    }),
    acceptFailed: error => ({
      type: types.ACCEPT_FAILED,
      error: true,
      payload: { error },
    }),
    rejectRequest: address => ({
      type: types.REJECT_REQUEST,
      payload: { address },
    }),
    rejectSuccess: address => ({
      type: types.REJECT_SUCCESS,
      payload: { address },
    }),
    rejectFailed: error => ({
      type: types.REJECT_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
