import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'booklet-info-student',
  initialState: {
    user: {
      name: '',
      surname: '',
      matricola: '',
      media: '',
    },
    exams: [],
  },
  actions: ['BOOKLET_INFO'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.BOOKLET_INFO_SUCCESS:
        return {
          ...state,
          user: action.payload.booklet.user,
          exams: action.payload.booklet.exams,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    bookletInfoRequest: () => ({
      type: types.BOOKLET_INFO_REQUEST,
    }),
    bookletInfoSuccess: booklet => ({
      type: types.BOOKLET_INFO_SUCCESS,
      payload: { booklet },
    }),
    bookletInfoFailed: error => ({
      type: types.BOOKLET_INFO_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
