const FactoryMethod = artifacts.require('./FactoryMethod.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const AcademicYearsList = artifacts.require('./AcademicYearsList.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const StudentFacade = artifacts.require('./StudentFacade.sol');
const DegreeRequests = artifacts.require('./DegreeRequests.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');

module.exports = (deployer) => {
  deployer.deploy(FactoryMethod);
  deployer.deploy(DegreeRequests);
  deployer.deploy(AcademicYearsList);
  deployer.deploy(ProfessorFacade);
  deployer.deploy(ListUsers).then(() => {
    const factoryA = FactoryMethod.deployed().then(instance => instance.address);
    const DegreeRequestsA = DegreeRequests.deployed().then(instance => instance.address);
    const AcademicYearsListA = AcademicYearsList.deployed().then(instance => instance.address);
    deployer.deploy(AdminFacade, ListUsers.address, factoryA, DegreeRequestsA, AcademicYearsListA);
    return deployer.deploy(StudentFacade, DegreeRequestsA, ListUsers.address);
  });
};
