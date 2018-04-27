const initialState = {
  data: {
    name: 'Giovanni',
    address: '0x0',
  },
  type: 'student',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
