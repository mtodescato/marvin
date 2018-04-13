// TODO: remove this when creating a true implementation of DuckModel

import FakeReducer from '../../reducers/fakeReducer';

describe('FakeReducer test suite', () => {
  it('ACTION_TYPE1 return the expected state', () => {
    expect(FakeReducer.reducer(
      FakeReducer.initialState,
      FakeReducer.creators.actionType1(),
      FakeReducer,
    )).to.have.property('fake', 2);
  });
  it('ACTION_TYPE2 return the expected state', () => {
    expect(FakeReducer.reducer(
      FakeReducer.initialState,
      FakeReducer.creators.actionType2(),
      FakeReducer,
    )).to.have.property('fake', 3);
  });
});
