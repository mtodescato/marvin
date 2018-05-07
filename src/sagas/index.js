import { fork, all } from 'redux-saga/effects';
import * as bookletInfo from './bookletInfo';
import * as addUser from './addUser';
import * as web3 from './web3';
import * as web3UserInfo from './web3UserInfo';

export default function* rootSaga() {
  yield all([
    fork(bookletInfo.triggerAction),
    fork(addUser.triggerAction),
    fork(web3.triggerAction),
    fork(web3UserInfo.triggerAction),
  ]);
}

export {
  bookletInfo,
  addUser,
  web3,
  web3UserInfo,
};

