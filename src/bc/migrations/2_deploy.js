const FactoryMethod = artifacts.require('./FactoryMethod.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const AcademicYearsList = artifacts.require('./AcademicYearsList.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const StudentFacade = artifacts.require('./StudentFacade.sol');
const DomandeLaurea = artifacts.require('./DomandeLaurea.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');

module.exports = (deployer) => {
  deployer.deploy(FactoryMethod);
  deployer.deploy(DomandeLaurea);
  deployer.deploy(AcademicYearsList);
  deployer.deploy(ProfessorFacade);
  deployer.deploy(ListUsers).then(() => {
    const factoryA = FactoryMethod.deployed().then(instance => instance.address);
    const DomandeLaureaA = DomandeLaurea.deployed().then(instance => instance.address);
    const AcademicYearsListA = AcademicYearsList.deployed().then(instance => instance.address);
    deployer.deploy(AdminFacade, ListUsers.address, factoryA, DomandeLaureaA, AcademicYearsListA);
    return deployer.deploy(StudentFacade, DomandeLaureaA, ListUsers.address);
  });
};
