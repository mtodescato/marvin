/*
 * file: bookletInfo.js
 * version: 0.1
 * type: javascript reducer
 * authors: Francesca Lonedo
 * license: MIT License
 * warnings: reducer for the BookletInfo state
 * changes:
 * * Francesca Lonedo    | 2018/04/24 | file creation
 * * Francesca Lonedo    | 2018/04/26 | added sagas
 */

import DuckModule from './duckModule';

export default new AsyncFlow({
  store: 'booklet-Info',
  initialState: {
    bookletInfoAvailable: false,
    address: '0',
    booklet: {},
  },
  reducer: (state, action, { types }) => {
    switch (action.type) {
      case types.BOOKLET_INFO_REQUEST:
        return {
          ...state,
          bookletInfoAvailable: false,
          address: action.payload.address,
        };
      case types.BOOKLET_INFO_FAILED:
        return {
          ...state,
          bookletInfoAvailable: false,
          address: '0',
        };
      case types.BOOKLET_INFO_SUCCESS:
        return {
          ...state,
          bookletInfoAvailable: true,
          booklet: action.payload.booklet,
        }
      default:
        return state;
    }
  },
  creators: ({ types }) => ({
    bookletInfoRequest: address => ({ type: types.BOOKLET_INFO_REQUEST, payload: { address } }),
    bookletInfoFailed: error => ({ type: types.BOOKLET_INFO_FAILED, error: true, payload: { error } }),
    bookletInfoSuccess: booklet => ({ type: types.BOOKLET_INFO_SUCCESS, payload: { booklet } }),
  }),
  // selectors: ...
  //saga
  action: 'BOOKLET_INFO',
  call: (payload) => {
    contract: UserInfo, 
    //contract to call
    contractFunction: 'getBooklet', 
    //function to call inside the contract
    args: [payload.address], 
    //args to pass the function
    resultAdapter: result => result.c[0], 
    //get back results in the right format
    mockResult: { 
      //to use when solidity function is not implemented yet
      c: [
        2, 
        //fields I am requesting
      ],
    }
  },
  stub: true, 
  //to use when solidity function is not implemented yet
});
