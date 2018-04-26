const FactoryMethod = artifacts.require('./FactoryMethod.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const StudentFacade = artifacts.require('./StudentFacade.sol');
const DomandeLaurea = artifacts.require('./DomandeLaurea.sol');

module.exports = (deployer) => {
  deployer.deploy(FactoryMethod);
  deployer.deploy(DomandeLaurea);
  deployer.deploy(ListUsers);
  deployer.deploy(AdminFacade,
                  ListUsers.deployed().then( instance => instance.address ),
                  FactoryMethod.deployed().then( instance => instance.address),
                  DomandeLaurea.deployed().then( instance => instance.address ));
  deployer.deploy(StudentFacade,
                  DomandeLaurea.deployed().then( instance => instance.address ),
                  ListUsers.deployed().then( instance => instance.address ));
  /*
  deployer.deploy(ListUsers).then(() => {
    const factoryAddress = FactoryMethod.deployed().then( instance => instance.address );
    return deployer.deploy(AdminFacade, ListUsers.address, factoryAddress );
  });*/
};
