import { put, takeEvery, call } from 'redux-saga/effects';
import { Web3UserInfo } from '../reducers';
import { deployed } from './web3calls';
import ListUsers from '../bc/build/contracts/ListUsers.json';
import User from '../bc/build/contracts/User.json';

// FIXIT: risolve la transazione prima ancora di aver ricevuto i dati
// probabilmente da ricavare l'istanza di User come faccion con ListUsers
export const getUserInfo = address => new Promise((resolve) => {
  deployed(ListUsers)
    .then(async (ListUsersInstance) => {
      const userType = await ListUsersInstance.getType.call(address);
      const userAddress = await ListUsersInstance.getUser.call(address);
      const user = window.web3.eth.contract(User.abi).at(userAddress);
      let name;
      user.getName((err, res) => {
        if (!err) {
          name = window.web3.toAscii(res);
        } else {
          throw new Error(err);
        }
      });
      let surname;
      await user.getName((err, res) => {
        if (!err) {
          surname = window.web3.toAscii(res);
        } else {
          throw new Error(err);
        }
      });
      let socialNumber;
      await user.getName((err, res) => {
        if (!err) {
          socialNumber = window.web3.toAscii(res);
        } else {
          throw new Error(err);
        }
      });
      let serial;
      await user.getName((err, res) => {
        if (!err) {
          serial = res;
        } else {
          throw new Error(err);
        }
      });
      resolve({
        data: {
          name,
          surname,
          socialNumber,
          serial,
        },
        userType: userType.c[0],
      });
    });
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
