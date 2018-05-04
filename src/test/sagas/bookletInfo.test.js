/*
 * file: bookletInfo.test.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings:
 * changes:
 * * Denis Mazzucato    | 2018/04/28 | file creation
 */

import { expectSaga } from 'redux-saga-test-plan';
import { bookletInfo as saga } from '../../sagas';
import { BookletInfo } from '../../reducers';

describe('BookletInfo saga test suite', () => {
  const address = '0';
  const mock = { address };
  it('handles reducers when request is dispatched', () => {
    console.log(saga);
    saga.mockInjection(mock);
    return expectSaga(saga.triggerAction)
      .withReducer(BookletInfo.reducer)
      .put(BookletInfo.creators.bookletInfoSuccess(mock))
      .dispatch(BookletInfo.creators.bookletInfoRequest(address))
      .hasFinalState({
        booklet: mock,
        status: 'RESOLVED',
      })
      .run();
  });
});
