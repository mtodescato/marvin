import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-exams',
  initialState: {
    exams: [],
    size: 0,
    year: 2018,
  },
  actions: ['LIST_EXAMS'],
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
  }),
});
