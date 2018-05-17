const ListUsers = artifacts.require('./ListUsers.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const User = artifacts.require('./User.sol');
const AcademicYear = artifacts.require('./AcademicYear.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';
const address2 = '0xea6d486f25bb15045051ed4e9c63d9781dcf9c87';
const address3 = '0x095163ece9b776e8c87a1c8949731d18272199c9';
const address4 = '0xd59ce5657009c7bc357317fa05a7df3b77585485';
// const address5 = '0x4c3408f13b6bdd5ab0b2af10afc9985dd84553a9';
// const address6 = '0xbb1c5ecd6182f7b1095e5281d0105bbcb589238d';
// const address7 = '0x1b23075e7d9fa21cadb1af0bf624d80dfdf084d3';
// const address8 = '0x8422fd812f503ea73df496b884b007cb0b39ae7e';
// const address9 = '0x98b8a8c987ab6037ff014178e7ee05a7605d38f3';


contract('Testing AdminFacade', () => {
  let adminFacadeInstance;
  let ListUsersInstance;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });

  it('TS0001: Test insert user', async () => {
    await adminFacadeInstance.addUser('simone1', 'ballarin', 'bllsmn7580297584', 12335, address1, 2, { from: address0 });
    const userAddress = await ListUsersInstance.getUser.call('0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4');
    const user = User.at(userAddress);
    const serial = await user.getSerial();
    assert.equal(serial.toNumber(), 12335, 'test get from address');
    const numberOfUsers = await ListUsersInstance.getNumberOfUsers();
    assert.equal(numberOfUsers.toNumber(), 1, 'added user');
    await adminFacadeInstance.addUser('simone2', 'ballarin', 'bllsmn7580297584', 12435, address2, 0, { from: address1 });
  });

  it('TS0002 getUser return equals getUserInt', async () => {
    const addressFromGetUser = await ListUsersInstance.getUser.call(address1);
    const addressFromGetUserInt = await ListUsersInstance.getUserInt.call(0);
    assert.equal(addressFromGetUser, addressFromGetUserInt, 'same address');
  });

  it('TS0003 Test remove user', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss7580297584', 12324, address3, 0);
    let numberOfUsers = await ListUsersInstance.getNumberOfUsers();
    assert.equal(numberOfUsers.toNumber(), 3, 'added user');
    adminFacadeInstance.removeUser(address3, { from: address0 });
    numberOfUsers = await ListUsersInstance.getNumberOfUsers();
    assert.equal(numberOfUsers.toNumber(), 2, 'removed user');
  });

  it('TS0004 insert an academic year', async () => {
    adminFacadeInstance.addAcademicYear(796, { from: address0 });
    const AcademicYearAddress = await adminFacadeInstance.getAcademicYear.call(796);
    assert.notEqual(AcademicYearAddress, '0x0000000000000000000000000000000000000000', 'test address academic year');
  });

  it('TS0005 add a degree course', async () => {
    adminFacadeInstance.addAcademicYear(797, { from: address0 });
    const AcademicYearAddress = await adminFacadeInstance.getAcademicYear(797);
    const year797 = AcademicYear.at(AcademicYearAddress);
    let numberOfDC = await year797.getNumberOfDC.call();
    assert.equal(numberOfDC.toNumber(), 0, 'Before insert');
    adminFacadeInstance.addDegreeCourse(797, 'computer science', 'Mario Rossi', 1);
    numberOfDC = await year797.getNumberOfDC.call();
    assert.equal(numberOfDC.toNumber(), 1, 'After insert');
  });

  it('TS0006 return a degree course', async () => {
    const degreeCourseAddress = adminFacadeInstance.getDegreeCourse(797, 0);
    assert.notEqual(degreeCourseAddress, '0x0000000000000000000000000000000000000000', 'address is not null');
  });

  it('TS0007 create a teaching', async () => {
    const degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(797, 0);
    adminFacadeInstance.addTeaching(degreeCourseAddress, address4, 'maths');
    const teaching = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    assert.notEqual(teaching, '0x0000000000000000000000000000000000000000', 'added teaching');
  });
});
