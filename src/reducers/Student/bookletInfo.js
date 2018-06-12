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
    activeCourseName: 'N/A',
    exams: [],
  },
  actions: ['BOOKLET_INFO'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.BOOKLET_INFO_SUCCESS:
        if (action.payload.booklet) {
          return {
            ...state,
            user: action.payload.booklet.user,
            activeCourseName: action.payload.booklet.activeCourseName,
            exams: action.payload.booklet.exams,
          };
        } return state;
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
