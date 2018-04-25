const FactoryMethod = artifacts.require('./FactoryMethod.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');

module.exports = (deployer) => {
  deployer.deploy(FactoryMethod);
  deployer.deploy(ListUsers).then(() => {
    const factoryAddress = FactoryMethod.deployed().then( instance => instance.address );
    return deployer.deploy(AdminFacade, ListUsers.address, factoryAddress );
  });
};
