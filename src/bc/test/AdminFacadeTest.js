const ListUsers = artifacts.require('./ListUsers.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const User = artifacts.require('./User.sol');
// const AcademicYear = artifacts.require('./AcademicYear.sol');
const gAddress = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';


contract('Testing AdminFacade', () => {
  let adminFacadeInstance;
  let ListUsersInstance;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });

  it('Test insert and get user', () => {
    adminFacadeInstance.addUser('simone1', 'ballarin', 'bllsmn7580297584', 12335, gAddress, 0, { from: gAddress });
    ListUsersInstance.getUser('0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4').then(usr => User.at(usr))
      .then(usr => usr.getSerial())
      .then(v => assert.equal(v.toNumber(), 12335, 'test inserting professor'));
    ListUsersInstance.getNumberOfUsers().then(result => assert.equal(result.toNumber(), 1, 'added user'));
  });

  it('Test remove user', () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss7580297584', 12324, 0xe0d040070bb6e3ebd2cb4ccd38d773387eaec7d4, 0);
    ListUsersInstance.getNumberOfUsers().then(result => assert.equal(result.toNumber(), 2, 'added user'));
    adminFacadeInstance.removeUser(gAddress);
    ListUsersInstance.getNumberOfUsers().then(result => assert.equal(result.toNumber(), 1, 'removed user'));
  });

  it('insert an academic year', () => {
    adminFacadeInstance.addAcademicYear(796, { from: gAddress });
    adminFacadeInstance.getAcademicYear(796).then((result) => {
      assert.notEqual(web3.fromAscii(result), '', 'test address academic year');
    });
  });
/*
  it('getAcademicYear retrun correct address', () => {
    adminFacadeInstance.getAcademicYear(796).then((result) => {
      console.log();
      (AcademicYear.at(result)).getNumberOfDC()
        .then(number => assert.equal(number.toNumber(), 0, 'no degreeCourses'));
    });
    adminFacadeInstance.addDegreeCourse(796, 'computer science', 'Mario Rossi', 1);
    adminFacadeInstance.getAcademicYear(796).then((result) => {
      (AcademicYear.at(result)).getNumberOfDC()
        .then(number => assert.equal(number.toNumber(), 1, 'one degree course'));
    });
  }); */
});
