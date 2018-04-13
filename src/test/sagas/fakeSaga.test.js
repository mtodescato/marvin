// TODO: remove this when creating a true implementation of DuckModel

import { takeLatest, put } from 'redux-saga/effects';
import { runAction, triggerAction } from '../../sagas/fakeSaga';

describe('FakeSaga test suite', () => {
  it('runAction should fire FakeReducer/ACTION_TPE2', () => {
    const it = runAction();
    expect(it.next().value).to.deep.equal(put({
      type: 'marvin/fake-reducer/ACTION_TYPE2',
    }));
    const end = it.next();
    expect(end).to.have.property('value', undefined);
    expect(end).to.have.property('done', true);
  });
  it('triggerAction should trigger FakeReducer/ACTION_TYPE1', () => {
    const it = triggerAction();
    expect(it.next().value.FORK.args[0]).to.deep.equal('marvin/fake-reducer/ACTION_TYPE1');
    const end = it.next();
    expect(end).to.have.property('value', undefined);
    expect(end).to.have.property('done', true);
  });
});
