import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-exams',
  initialState: {
    exams: [],
    size: 0,
    year: 2018,
  },
  actions: ['LIST_EXAMS', 'MANAGE_VOTE'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_EXAMS_SUCCESS:
        return {
          ...state,
          size: action.payload.size,
          exams: action.payload.exams,
        };
      case types.LIST_EXAMS_REQUEST:
        return {
          ...state,
          year: action.payload.year,
        };
      case types.MANAGE_VOTE_SUCCESS:
        return {
          ...state,
          size: state.size - 1,
          exams: state.exams.filter(exam => exam.examAddress !== action.payload.address),
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listExamsRequest: year => ({
      type: types.LIST_EXAMS_REQUEST,
      payload: { year },
    }),
    listExamsSuccess: ({ exams, size }) => ({
      type: types.LIST_EXAMS_SUCCESS,
      payload: { exams, size },
    }),
    listExamsFailed: error => ({
      type: types.LIST_EXAMS_FAILED,
      error: true,
      payload: { error },
    }),
    manageVoteRequest: address => ({
      type: types.MANAGE_VOTE_REQUEST,
      payload: { address },
    }),
    manageVoteSuccess: address => ({
      type: types.MANAGE_VOTE_SUCCESS,
      payload: { address },
    }),
    manageVoteFailed: error => ({
      type: types.MANAGE_VOTE_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
