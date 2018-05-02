import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'web3',
  initialState: {
    address: '0x0',
    isAvailable: false,
  },
  actions: ['WEB3'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.WEB3_SUCCESS:
        return { ...state, address: action.payload.address, isAvailable: true };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    web3Request: () => ({
      type: types.WEB3_REQUEST,
    }),
    web3Success: address => ({
      type: types.WEB3_SUCCESS,
      payload: { address },
    }),
    web3Failed: error => ({
      type: types.WEB3_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
