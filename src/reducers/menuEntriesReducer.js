import { CHANGE_ACTIVE } from '../actions/menuEntriesActions';

const initialState = 3;

const menuEntriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return action.id;
    default:
      return state;
  }
};

export default menuEntriesReducer;
