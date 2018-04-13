// TODO: remove this when creating a true implementation of DuckModel

import { put } from 'redux-saga/effects';
import { runAction, triggerAction } from '../../sagas/fakeSaga';

describe('FakeSaga test suite', () => {
  it('runAction should fire FakeReducer/ACTION_TPE2', () => {
    const it = runAction();
    expect(it.next().value).to.deep.equal(put({
      type: 'marvin/fake-reducer/ACTION_TYPE2',
    }));
    // eslint-disable-next-line no-unused-expressions
    expect(it).end;
  });
  it('triggerAction should trigger FakeReducer/ACTION_TYPE1', () => {
    const it = triggerAction();
    expect(it.next().value.FORK.args[0]).to.deep.equal('marvin/fake-reducer/ACTION_TYPE1');
    // eslint-disable-next-line no-unused-expressions
    expect(it).end;
  });
});
