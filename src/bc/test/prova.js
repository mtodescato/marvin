const ListUsers = artifacts.require('./ListUsers.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const User = artifacts.require('./User.sol');


function cleanZeros(str) {
  let newStr = str;
  while (newStr.search('\u0000') !== -1) {
    newStr = newStr.replace('\u0000', '');
  }
  return newStr;
}

contract ('Prova List e factory' , () => {
  AdminFacade.deployed().then( inst => { adminFacadeInstance = inst });
  ListUsers.deployed().then( inst => { ListUsersInstance = inst });

  it ('creazione List e factory', () => {
    adminFacadeInstance.addUser('simone1', 'ballarin', 'bllsmn7580297584', 1233, 0x0656, 0);
    ListUsersInstance.getUser.call(0).then( usr => {
        return User.at(usr);})
      .then( usr => usr.getSerial())
      .then(v => assert.equal(v.toNumber() ,1233,'test inserimento professore'));
    });
});


