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

  it('Test insert user', async () => {
    adminFacadeInstance.addUser('simone1', 'ballarin', 'bllsmn7580297584', 12335, gAddress, 0, { from: gAddress });
    const userAddress = await ListUsersInstance.getUser.call('0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4');
    const user = User.at(userAddress);
    const serial = await user.getSerial();
    assert.equal(serial.toNumber(), 12335, 'test get from address');
    const numberOfUsers = await ListUsersInstance.getNumberOfUsers();
    assert.equal(numberOfUsers.toNumber(), 1, 'added user');
  });

  it('getUser return equals getUserInt', async () => {
    const addressFromGetUser = await ListUsersInstance.getUser.call('0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4');
    const addressFromGetUserInt = await ListUsersInstance.getUserInt.call(0);
    assert.equal(addressFromGetUser, addressFromGetUserInt, 'same address');
  });

  it('Test remove user', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss7580297584', 12324, '0xe0d040070bb6e3ebd2cb4ccd38d773387eaec7d4', 0);
    let numberOfUsers = await ListUsersInstance.getNumberOfUsers();
    assert.equal(numberOfUsers.toNumber(), 2, 'added user');
    adminFacadeInstance.removeUser(gAddress);
    numberOfUsers = await ListUsersInstance.getNumberOfUsers();
    assert.equal(numberOfUsers.toNumber(), 1, 'removed user');
  });

  it('insert an academic year', async () => {
    adminFacadeInstance.addAcademicYear(796, { from: gAddress });
    const AcademicYearAddress = await adminFacadeInstance.getAcademicYear.call(796);
    assert.notEqual(AcademicYearAddress, '0x0000000000000000000000000000000000000000', 'test address academic year');
  });

  it('add a degree course', async () => {
    adminFacadeInstance.addAcademicYear(797, { from: gAddress });
    const AcademicYearAddress = await adminFacadeInstance.getAcademicYear(797);
    const year797 = AcademicYear.at(AcademicYearAddress);
    let numberOfDC = await year797.getNumberOfDC.call();
    assert.equal(numberOfDC.toNumber(), 0, 'Before insert');
    adminFacadeInstance.addDegreeCourse(797, 'computer science', 'Mario Rossi', 1);
    numberOfDC = await year797.getNumberOfDC.call();
    assert.equal(numberOfDC.toNumber(), 1, 'After insert');
  });

  it('return a degree course', async () => {
    const degreeCourseAddress = adminFacadeInstance.getDegreeCourse(797, 0);
    assert.notEqual(degreeCourseAddress, '0x0000000000000000000000000000000000000000', 'address is not null');
  });

  it('create a teaching', async () => {
    adminFacadeInstance.addUser('mario', 'bianchi', 'mrrss7585677584', 12624, '0xe0d040070bb6e3ebd2cb4cdd38d775397eaec7d4', 1);
    const degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(797, 0);
    adminFacadeInstance.addTeaching(degreeCourseAddress, '0xe0d040070bb6e3ebd2cb4cdd38d775397eaec7d4', 'maths');
    const teaching = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    assert.notEqual(teaching, '0x0000000000000000000000000000000000000000', 'added teaching');
  });
});
