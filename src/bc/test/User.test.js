const AdminFacade = artifacts.require('./AdminFacade.sol');
const User = artifacts.require('./User.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';


contract('Testing User', () => {
  let adminFacadeInstance;
  let ListUsersInstance;
  let userInstance;
  let userAddress;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });

  it('sets up for testing User', async () => {
    await adminFacadeInstance.addUser('mario', 'rossi', 'mrrss75802975', 12324, address1, 1, { from: address0 });
    userAddress = await ListUsersInstance.getUser.call(address1);
    userInstance = User.at(userAddress);
  });

  it('TS0040 can get user name', async () => {
    const name = await userInstance.getName.call();
    assert.equal(web3.toAscii(name), 'mario', 'name returns correctly');
  });

  it('TS0041 can get user surname', async () => {
    const surname = await userInstance.getSurname.call();
    assert.equal(web3.toAscii(surname), 'rossi', 'surname returns correctly');
  });

  it('TS0043 can get user social number', async () => {
    const socialNumber = await userInstance.getSocialNumber.call();
    assert.equal(web3.toAscii(socialNumber), 'mrrss75802975', 'social number returns correctly');
  });

  it('TS0042 can get user serial', async () => {
    const serial = await userInstance.getSerial.call();
    assert.equal(serial.toNumber(), 12324, 'serial returns correctly');
  });
});
