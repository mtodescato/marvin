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


/*
(node:30802) UnhandledPromiseRejectionWarning: Error: FactoryMethod has not been deployed to detected network (network/artifact mismatch)
    at /usr/lib/node_modules/truffle/build/webpack:/~/truffle-contract/contract.js:454:1
    at <anonymous>
    at process._tickDomainCallback (internal/process/next_tick.js:228:7)
(node:30802) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:30802) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
Error: FactoryMethod has not been deployed to detected network (network/artifact mismatch)
    at /usr/lib/node_modules/truffle/build/webpack:/~/truffle-contract/contract.js:454:1
    at <anonymous>
    at process._tickDomainCallback (internal/process/next_tick.js:228:7)
truffle(development)> (node:30802) PromiseRejectionHandledWarning: Promise rejection was handled asynchronously (rejection id: 1)


*/
