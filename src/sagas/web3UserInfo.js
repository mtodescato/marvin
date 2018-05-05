import { put, takeEvery, call } from 'redux-saga/effects';
import { Web3UserInfo } from '../reducers';

const ListUsers = artifacts.require('./ListUsers.sol');
const User = artifacts.require('./User.sol');

export const getUserInfo = address => new Promise(async (resolve, reject) => {
  try {
    let ListUsersInstance;
    ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });
    console.log(ListUsersInstance); // FIXIT:
    const userAddress = await ListUsersInstance.getUser.call(address);
    const type = await ListUsersInstance.getType.call(address);
    const user = User.at(userAddress);
    const name = await user.getName();
    const surname = await user.getSurname();
    const socialNumber = await user.getSocialNumber();
    const serial = await user.getSerial();
    const data = {
      name,
      surname,
      socialNumber,
      serial,
    };
    resolve({ data, type });
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
