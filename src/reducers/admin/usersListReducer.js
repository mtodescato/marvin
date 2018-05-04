function deleteUser(users, address) {
  const out = [];
  users.map(element => element.address !== address && out.push(element));
  return out;
}

const initialState = {
  size: 0,
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INITIALIZE':
      return initialState;
    case 'SIZE_SUCCESS':
      return {
        ...state,
        size: action.payload.size,
      };
    case 'NEXT_SUCCESS':
      return {
        ...state,
        users: state.users.concat(action.payload.user),
      };
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        size: state.size - 1,
        users: deleteUser(state.users, action.payload.address),
      };
    default:
      return state;
  }
}
