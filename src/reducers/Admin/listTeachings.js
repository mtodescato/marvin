import AsyncFlow from '../asyncFlow';

export default AsyncFlow({
  store: 'list-teachings',
  initialState: {
    teachings: [],
    size: 0,
    year: 2018,
  },
  actions: ['LIST_TEACHINGS'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.LIST_TEACHINGS_SUCCESS:
        return {
          ...state,
          size: action.payload.size,
          teachings: action.payload.teachings,
        };
      case types.LIST_TEACHINGS_REQUEST:
        return {
          ...state,
          year: action.payload.year,
        };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    listTeachingsRequest: year => ({
      type: types.LIST_TEACHINGS_REQUEST,
      payload: { year },
    }),
    listTeachingsSuccess: ({ teachings, size }) => ({
      type: types.LIST_TEACHINGS_SUCCESS,
      payload: { teachings, size },
    }),
    listTeachingsFailed: error => ({
      type: types.LIST_TEACHINGS_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
