const initialState = {
  isSuccess: false,
  isFailed: false,
};
// isSuccess AND isFailed non sono complementari

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        isSuccess: true,
        isFailed: false,
      };
    case 'ADD_USER_FAILED':
      return {
        ...state,
        isSuccess: false,
        isFailed: true,
      };
    case 'CHANGE_ACTIVE':
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
