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

import { createStore } from 'redux';
import { BookletInfo } from '../../reducers';

describe('BookletInfo test suite', () => {
  const obj = BookletInfo();
  const store = createStore(obj.reducer);
  it('should add a booklet when success action is dispatched', () => {
    const booklet = { a: 1, b: 2 };
    store.dispatch(obj.creators.bookletInfoSuccess(booklet));
    expect(store.getState()).to.have.property('booklet');
    const state = store.getState().booklet;
    expect(state).to.have.property('a', 1);
    expect(state).to.have.property('b', 2);
  });
});
