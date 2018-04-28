/*
 * file: bookletInfo.js
 * version: 0.1
 * type: javascript saga
 * authors: Denis Mazzucato
 * license: MIT License
 * warnings:
 * changes:
 * * Denis Mazzucato    | 2018/04/28 | file creation
 */

import { put, takeLatest, call } from 'redux-saga/effects';
import { BookletInfo } from '../reducers';
import deployCall, { stubDeployCall } from './web3calls';
// TODO: add next line when contract are implemented
// import contract from '../bc/migration/users.json';

let mockResult = {};
let callWrapper = deployCall;

// side-effects
export const mockInjection = (mock) => {
  callWrapper = stubDeployCall;
  mockResult = mock;
};

export function* runAction({ payload }) {
  try {
    const result = yield call(callWrapper, ({
      // contract, TODO: readd this line when ...
      contractFunction: 'getBooklet',
      args: [payload.address],
      mockResult,
    }));
    yield put(BookletInfo.creators.bookletInfoSuccess(result));
  } catch (e) {
    yield put(BookletInfo.creators.bookletInfoFailed(e.message));
  }
}

export function* triggerAction() {
  yield takeLatest(BookletInfo.types.BOOKLET_INFO_REQUEST, runAction);
}
