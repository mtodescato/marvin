/*
 * file: bookletInfo.js
 * version: 0.1
 * type: javascript reducer
 * authors: Francesca Lonedo
 * license: MIT License
 * warnings: reducer for the BookletInfo state
 * changes:
 * * Francesca Lonedo   | 2018/04/24 | file creation
 * * Francesca Lonedo   | 2018/04/26 | added sagas
 * * Denis Mazzucato    | 2018/04/27 | refactoring after asyncFlow module was implements
 */

import AsyncFlow from './asyncFlow';

export default AsyncFlow({
  store: 'booklet-info',
  initialState: {
    booklet: {},
  },
  actions: ['BOOKLET_INFO'],
}).extend({
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.BOOKLET_INFO_SUCCESS:
        return { ...state, booklet: action.payload.booklet };
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    bookletInfoRequest: address => ({
      type: types.BOOKLET_INFO_REQUEST,
      payload: { address },
    }),
    bookletInfoSuccess: booklet => ({
      type: types.BOOKLET_INFO_SUCCESS,
      payload: { booklet },
    }),
    bookletInfoFailed: error => ({
      type: types.BOOKLET_INFO_FAILED,
      error: true,
      payload: { error },
    }),
  }),
});