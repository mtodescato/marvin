import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'web-3-user-info',
  initialState: {
    data: {
      name: '',
      surname: '',
      solcialNumber: '',
      serial: '',
    },
    type: 'undefined',
  },
  actions: ['WEB_3_USER_INFO'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.WEB_3_ADDRESS_SUCCESS:
        return { ...state, data: action.payload.data, type: action.payload.type };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    web3UserInfoRequest: address => ({
      type: types.WEB_3_USER_INFO_REQUEST,
      payload: { address },
    }),
    web3UserInfoSuccess: ({ data, type }) => ({
      type: types.WEB_3_USER_INFO_SUCCESS,
      payload: { data, type },
    }),
    web3UserInfoFailed: error => ({
      type: types.WEB_3_USER_INFO_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
