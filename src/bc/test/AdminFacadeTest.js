const ListUsers = artifacts.require('./ListUsers.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const User = artifacts.require('./User.sol');
const AcademicYear = artifacts.require('./AcademicYear.sol');
const gAddress = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';


contract('Testing AdminFacade', () => {
  let adminFacadeInstance;
  let ListUsersInstance;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });

  it('Test insert and get user', async () => {
    adminFacadeInstance.addUser('simone1', 'ballarin', 'bllsmn7580297584', 12335, gAddress, 0, { from: gAddress });
    ListUsersInstance.getUser.call('0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4').then(usr => User.at(usr))
      .then(usr => usr.getSerial())
      .then(v => assert.equal(v.toNumber(), 12335, 'test inserting professor'));
    ListUsersInstance.getUserInt.call(0).then(usr => User.at(usr))
      .then(usr => usr.getSerial())
      .then(v => assert.equal(v.toNumber(), 12335, 'test inserting professor'));
    ListUsersInstance.getNumberOfUsers().then(result => assert.equal(result.toNumber(), 1, 'added user'));
  });

  it('Test remove user', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss7580297584', 12324, '0xe0d040070bb6e3ebd2cb4ccd38d773387eaec7d4', 0);
    ListUsersInstance.getNumberOfUsers().then(result => assert.equal(result.toNumber(), 2, 'added user'));
    adminFacadeInstance.removeUser(gAddress);
    ListUsersInstance.getNumberOfUsers().then(result => assert.equal(result.toNumber(), 1, 'removed user'));
  });

  it('insert an academic year', async () => {
    adminFacadeInstance.addAcademicYear(796, { from: gAddress });
    const AcademicYearAddress = await adminFacadeInstance.getAcademicYear.call(796);
    assert.notEqual(AcademicYearAddress, '0x0000000000000000000000000000000000000000', 'test address academic year');
  });

  it('getAcademicYear retrun correct address', async () => {
    adminFacadeInstance.addAcademicYear(797, { from: gAddress });
    const AcademicYearAddress = await adminFacadeInstance.getAcademicYear(797);
    const year797 = AcademicYear.at(AcademicYearAddress);
    let numberOfDC = await year797.getNumberOfDC.call();
    assert.equal(numberOfDC.toNumber(), 0, 'Before insert');
    adminFacadeInstance.addDegreeCourse(797, 'computer science', 'Mario Rossi', 1);
    numberOfDC = await year797.getNumberOfDC.call();
    assert.equal(numberOfDC.toNumber(), 1, 'After insert');
  });
});
