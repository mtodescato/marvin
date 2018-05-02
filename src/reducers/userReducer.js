
const initialState = {
  data: {
    name: 'Giovanni',
    address: '0x0',
  },
  type: 'admin',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        type: 'student',
      };
    default:
      return state;
  }
};

export default userReducer;
