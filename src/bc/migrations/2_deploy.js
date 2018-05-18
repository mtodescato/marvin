const FactoryMethod = artifacts.require('./FactoryMethod.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const AcademicYearsList = artifacts.require('./AcademicYearsList.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const StudentFacade = artifacts.require('./StudentFacade.sol');
const DegreeRequests = artifacts.require('./DegreeRequests.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');

module.exports = (deployer) => {
  deployer.deploy(DegreeRequests);
  deployer.deploy(AcademicYearsList);
  deployer.deploy(ProfessorFacade);
  deployer.deploy(ListUsers).then(async () => {
    const DegreeRequestsA = await DegreeRequests.deployed().then(instance => instance.address);
    const AcademicYearsListA = await AcademicYearsList
      .deployed().then(instance => instance.address);
    await deployer.deploy(StudentFacade, DegreeRequestsA, ListUsers.address);
    const studentFacadeAddress = await StudentFacade.deployed().then(instance => instance.address);
    await deployer.deploy(FactoryMethod, studentFacadeAddress);
    const factoryA = await FactoryMethod.deployed().then(instance => instance.address);
    await deployer
      .deploy(AdminFacade, ListUsers.address, factoryA, DegreeRequestsA, AcademicYearsListA);
  });

  deployer.then(async () => {
    const AdminFacadeInstance = await AdminFacade.deployed().then(instance => instance);
    const StudentFacadeInstance = await StudentFacade.deployed().then(instance => instance);
    const ListUsersInstance = await ListUsers.deployed();
    const DegreeRequestsInstance = await DegreeRequests.deployed().then(instance => instance);
    await ListUsersInstance.transfertOwnernship(AdminFacadeInstance.address);
    const AcademicYearsListInstance = await AcademicYearsList.deployed().then(instance => instance);
    await AcademicYearsListInstance.transfertOwnernship(AdminFacadeInstance.address);
    await DegreeRequestsInstance
      .changeOwners(AdminFacadeInstance.address, StudentFacadeInstance.address);
  });
};
