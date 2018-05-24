import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-booking-exams-student',
  initialState: {
    exams: [],
  },
  actions: ['LIST_BOOKING_EXAMS', 'SUBSCRIBE'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_BOOKING_EXAMS_SUCCESS:
        return {
          ...state,
          exams: action.payload.exams,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listBookingExamsRequest: () => ({
      type: types.LIST_BOOKING_EXAMS_REQUEST,
    }),
    listBookingExamsSuccess: exams => ({
      type: types.LIST_BOOKING_EXAMS_SUCCESS,
      payload: { exams },
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
    subscribeSuccess: () => ({
      type: types.SUBSCRIBE_SUCCESS,
    }),
    subscribeFailed: error => ({
      type: types.SUBSCRIBE_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
