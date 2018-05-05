import { put, takeEvery, call } from 'redux-saga/effects';
import { Web3UserInfo } from '../reducers';
import { deployed, getAccount } from './web3calls';
import ListUsers from '../bc/build/contracts/ListUsers.json';
import AdminFacade from '../bc/build/contracts/AdminFacade.json'; // TODO: fake
import User from '../bc/build/contracts/User.json';

export const getUserInfo = address => new Promise((resolve, reject) => {
  try {
    deployed(ListUsers)
      .then(inst => inst.getType.call(address))
      .then((type) => {
        resolve({
          data: {
            name: 'mario',
            surname: 'rossi',
            socialNumber: 'mrsrss7580297584',
          },
          type,
        });
      });

  } catch (e) { reject(Error(e)); }
});

export function* runAction({ payload }) {
  try {
    const user = yield call(getUserInfo, payload.address);
    yield put(Web3UserInfo.creators.web3UserInfoSuccess(user));
  } catch (e) {
    yield put(Web3UserInfo.creators.web3UserInfoFailed(e.message)); // fail the promise getWeb3
  }
}

export function* triggerAction() {
  yield takeEvery(Web3UserInfo.types.WEB_3_USER_INFO_REQUEST, runAction);
}
