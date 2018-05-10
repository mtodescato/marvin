import { createStore } from 'redux';
import { BookletInfo } from '../../reducers';

describe('BookletInfo reducer test suite', () => {
  const store = createStore(BookletInfo.reducer);
  it('should add a booklet when success action is dispatched', () => {
    const booklet = { a: 1, b: 2 };
    store.dispatch(BookletInfo.creators.bookletInfoSuccess(booklet));
    expect(store.getState()).to.have.property('booklet');
    const state = store.getState().booklet;
    expect(state).to.have.property('a', 1);
    expect(state).to.have.property('b', 2);
  });
});
