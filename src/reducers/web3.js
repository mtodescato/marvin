import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'web3',
  initialState: {
    address: '0x0',
    isAvailable: false,
  },
  actions: ['WEB_3_ADDRESS'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.WEB_3_ADDRESS_SUCCESS:
        return { ...state, address: action.payload.address, isAvailable: true };
      case types.WEB_3_ADDRESS_FAILED:
        return { ...state, isAvailable: false };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    web3AddressRequest: () => ({
      type: types.WEB_3_ADDRESS_REQUEST,
    }),
    web3AddressSuccess: address => ({
      type: types.WEB_3_ADDRESS_SUCCESS,
      payload: { address },
    }),
    web3AddressFailed: error => ({
      type: types.WEB_3_ADDRESS_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
