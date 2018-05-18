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

  deployer.then(async () => {
    const AdminFacadeInstance = await AdminFacade.deployed().then(instance => instance);
    const ListUsersInstance = await ListUsers.deployed();
    await ListUsersInstance.transfertOwnernship(AdminFacadeInstance.address);
    const AcademicYearsListInstance = await AcademicYearsList.deployed().then(instance => instance);
    AcademicYearsListInstance.transfertOwnernship(AdminFacadeInstance.address);
  });
};
