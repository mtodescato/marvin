/*
 * file: asyncFlow.test.js
 * version: 0.1
 * type: javascript test
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings:
 * changes:
 * * Denis Mazzucato    | 2018/04/28 | file creation
 */

import { createStore } from 'redux';
import AsyncFlow from '../../reducers/asyncFlow';

describe('AsyncFlow test suite', () => {
  const obj = AsyncFlow({
    actions: ['ACT1', 'ACT2'],
    initialState: {},
  }).extend({
    creators: ({ types }) => ({
      act1Request: () => ({ type: types.ACT1_REQUEST }),
      act1Success: () => ({ type: types.ACT1_SUCCESS }),
      act1Failed: () => ({ type: types.ACT1_FAILED }),
      act2Request: () => ({ type: types.ACT1_REQUEST }),
      act2Success: () => ({ type: types.ACT1_SUCCESS }),
      act2Failed: () => ({ type: types.ACT1_FAILED }),
    }),
  });
  describe('check params to DuckModule are setted correctly', () => {
    it('types', () => {
      expect(obj).to.have.property('types')
        .and.to.include.all.keys(
          'ACT1_SUCCESS',
          'ACT1_REQUEST',
          'ACT1_FAILED',
          'ACT2_SUCCESS',
          'ACT2_REQUEST',
          'ACT2_FAILED',
        );
    });

    it('const statuses', () => {
      expect(obj).to.have.property('statuses')
        .and.to.include.all.keys('READY', 'PENDING', 'RESOLVED', 'ERRORED');
    });

    it('const flowes', () => {
      expect(obj).to.have.property('flowes')
        .and.to.include.all.keys('REQUEST', 'SUCCESS', 'FAILED');
    });

    it('initialState', () => {
      expect(obj).to.have.property('initialState')
        .and.to.have.property('status', 'READY');
    });
  });
  describe('status should update itself correclty every transaction', () => {
    const store = createStore(obj.reducer);
    it('REQUEST action should update status to PENDING', () => {
      store.dispatch(obj.creators.act1Request()); // ACT1
      expect(store.getState()).to.have.property('status', 'PENDING');

      store.dispatch(obj.creators.act2Request()); // ACT2
      expect(store.getState()).to.have.property('status', 'PENDING');
    });
    it('SUCCESS action should update status to RESOLVED', () => {
      store.dispatch(obj.creators.act1Success()); // ACT1
      expect(store.getState()).to.have.property('status', 'RESOLVED');

      store.dispatch(obj.creators.act2Success()); // ACT2
      expect(store.getState()).to.have.property('status', 'RESOLVED');
    });

    it('FAILED action should update status to ERRORED', () => {
      store.dispatch(obj.creators.act1Failed()); // ACT1
      expect(store.getState()).to.have.property('status', 'ERRORED');

      store.dispatch(obj.creators.act2Failed()); // ACT2
      expect(store.getState()).to.have.property('status', 'ERRORED');
    });
  });
});
