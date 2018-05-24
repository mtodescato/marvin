import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-booking-exams-student',
  initialState: {
    exams: [],
    size: 0,
  },
  actions: ['LIST_BOOKING_EXAMS', 'SUBSCRIBE'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_BOOKING_EXAMS_SUCCESS:
        return {
          ...state,
          exams: action.payload.exams || [],
          size: action.payload.size,
        };
      case types.SUBSCRIBE_SUCCESS:
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
    listBookingExamsRequest: () => ({
      type: types.LIST_BOOKING_EXAMS_REQUEST,
    }),
    listBookingExamsSuccess: ({ exams, size }) => ({
      type: types.LIST_BOOKING_EXAMS_SUCCESS,
      payload: { exams, size },
    }),
    listBookingExamsFailed: error => ({
      type: types.LIST_BOOKING_EXAMS_FAILED,
      error: true,
      payload: { error },
    }),
    subscribeRequest: address => ({
      type: types.SUBSCRIBE_REQUEST,
      payload: { address },
    }),
    subscribeSuccess: address => ({
      type: types.SUBSCRIBE_SUCCESS,
      payload: { address },
    }),
    subscribeFailed: error => ({
      type: types.SUBSCRIBE_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
