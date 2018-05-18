const AdminFacade = artifacts.require('./AdminFacade.sol');
const User = artifacts.require('./User.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';
// const address2 = '0xea6d486f25bb15045051ed4e9c63d9781dcf9c87';
// const address3 = '0x095163ece9b776e8c87a1c8949731d18272199c9';
// const address4 = '0xd59ce5657009c7bc357317fa05a7df3b77585485';
// const address5 = '0x4c3408f13b6bdd5ab0b2af10afc9985dd84553a9';
// const address6 = '0xbb1c5ecd6182f7b1095e5281d0105bbcb589238d';
// const address7 = '0x1b23075e7d9fa21cadb1af0bf624d80dfdf084d3';
// const address8 = '0x8422fd812f503ea73df496b884b007cb0b39ae7e';
// const address9 = '0x98b8a8c987ab6037ff014178e7ee05a7605d38f3';


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

  it('can get user name', async () => {
    const name = await userInstance.getName.call();
    assert.equal(web3.toAscii(name), 'mario', 'name returns correctly');
  });

  it('can get user surname', async () => {
    const surname = await userInstance.getSurname.call();
    assert.equal(web3.toAscii(surname), 'rossi', 'surname returns correctly');
  });

  it('can get user social number', async () => {
    const socialNumber = await userInstance.getSocialNumber.call();
    assert.equal(web3.toAscii(socialNumber), 'mrrss75802975', 'social number returns correctly');
  });

  it('can get user serial', async () => {
    const serial = await userInstance.getSerial.call();
    assert.equal(serial.toNumber(), 12324, 'serial returns correctly');
  });
});
