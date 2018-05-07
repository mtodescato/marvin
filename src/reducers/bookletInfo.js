import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'booklet-info',
  initialState: {
    booklet: {},
  },
  actions: ['BOOKLET_INFO'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.BOOKLET_INFO_SUCCESS:
        return { ...state, booklet: action.payload.booklet };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    bookletInfoRequest: address => ({
      type: types.BOOKLET_INFO_REQUEST,
      payload: { address },
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
