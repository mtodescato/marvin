const AdminFacade = artifacts.require('./AdminFacade.sol');
const gAddress = '037cd08a4b7f853ff3bbc961178edcf2d4a8ecb07a013e8a9842713b74e2fa57';
// const User = artifacts.require('./User.sol');

contract('prova inserimento anno accademico', () => {
  let adminFacadeInstance;
  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });

  it('insert an academic year', () => {
    adminFacadeInstance.addUser('simone1', 'ballarin', 'bllsmn7580297584', 1233, gAddress, 0);
    adminFacadeInstance.addAcademicYear(796);
    adminFacadeInstance.getAcademicYear(796).then((result) => {
      assert.notEqual(web3.fromAscii(result), '', 'test address academic year');
    });
  });
});
