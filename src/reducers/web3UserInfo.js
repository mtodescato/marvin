import AsyncFlow from './asyncFlow';

const type = [
  'student',
  'professor',
  'admin',
];

export default AsyncFlow({
  store: 'web-3-user-info',
  initialState: {
    data: {
      name: '',
      surname: '',
      socialNumber: '',
      serial: '',
    },
    type: 'undefined',
  },
  actions: ['WEB_3_USER_INFO'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.WEB_3_USER_INFO_SUCCESS:
        return { ...state, data: action.payload.data, type: type[action.payload.userType] };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    web3UserInfoRequest: address => ({
      type: types.WEB_3_USER_INFO_REQUEST,
      payload: { address },
    }),
    web3UserInfoSuccess: ({ data, userType }) => ({
      type: types.WEB_3_USER_INFO_SUCCESS,
      payload: { data, userType },
    }),
    web3UserInfoFailed: error => ({
      type: types.WEB_3_USER_INFO_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});
