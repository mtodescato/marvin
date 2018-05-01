const ListUsers = artifacts.require('./ListUsers.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const User = artifacts.require('./User.sol');
const gAddress = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';


contract('Testing AdminFacade', () => {
  let adminFacadeInstance;
  let ListUsersInstance;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });

  it('Test insert and get user', () => {
    adminFacadeInstance.addUser('simone1', 'ballarin', 'bllsmn7580297584', 1233, gAddress, 0);
    ListUsersInstance.getUser().then(usr => User.at(usr))
      .then(usr => usr.getSerial())
      .then(v => assert.equal(v.toNumber(), 1233, 'test user'));
  });

  it('insert an academic year', () => {
    adminFacadeInstance.addAcademicYear(796);
    adminFacadeInstance.getAcademicYear(796).then((result) => {
      assert.notEqual(web3.fromAscii(result), '', 'test address academic year');
    });
  });
});
