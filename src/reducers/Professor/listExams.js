import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-exams',
  initialState: {
    exams: [],
    size: 0,
    year: 2018,
    teaching: '0x0',
  },
  actions: ['LIST_EXAMS', 'LIST_EXAMS_FROM_TEACHING'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_EXAMS_SUCCESS:
      case types.LIST_EXAMS_FROM_TEACHING_SUCCESS:
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
      case types.LIST_EXAMS_FROM_TEACHING_REQUEST:
        return {
          ...state,
          teaching: action.payload.teaching,
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
    listExamsFromTeachingRequest: teaching => ({
      type: types.LIST_EXAMS_FROM_TEACHING_REQUEST,
      payload: { teaching },
    }),
    listExamsFromTeachingSuccess: ({ exams, size }) => ({
      type: types.LIST_EXAMS_FROM_TEACHING_SUCCESS,
      payload: { exams, size },
    }),
    listExamsFromTeachingFailed: error => ({
      type: types.LIST_EXAMS_FROM_TEACHING_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
