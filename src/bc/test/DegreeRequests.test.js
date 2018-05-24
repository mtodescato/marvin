const ListUsers = artifacts.require('./ListUsers.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const DegreeRequests = artifacts.require('./DegreeRequests.sol');
const StudentFacade = artifacts.require('./StudentFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
const Student = artifacts.require('./Student.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address5 = '0x4c3408f13b6bdd5ab0b2af10afc9985dd84553a9';
const address6 = '0xbb1c5ecd6182f7b1095e5281d0105bbcb589238d';


contract('Testing DegreeRequests', () => {
  let adminFacadeInstance;
  let ListUsersInstance;
  let professorFacadeInstance;
  let studentFacadeInstance;
  let DegreeRequestsInstance;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });
  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });
  StudentFacade.deployed().then((inst) => { studentFacadeInstance = inst; });
  DegreeRequests.deployed().then((inst) => { DegreeRequestsInstance = inst; });

  it('TS0038 can get the number of pending degree request', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss7580297584', 12335, address5, 1, { from: address0 });
    adminFacadeInstance.addUser('simone', 'ballarin', 'bllsmn7580297584', 12335, address6, 0, { from: address0 });
    adminFacadeInstance.addAcademicYear(798, { from: address0 });
    adminFacadeInstance.addDegreeCourse(798, 'computer science', 'Mario Rossi', 1);
    const degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(798, 0);
    const studentContractAddress = await ListUsersInstance.getUser.call(address6);
    const studentInstance = Student.at(studentContractAddress);
    await studentInstance.setDegreeCourse(degreeCourseAddress, { from: address6 });
    const professorContract = await ListUsersInstance.getUser.call(address5);
    adminFacadeInstance
      .addTeaching(degreeCourseAddress, professorContract, 'maths', professorFacadeInstance.address, { from: address0 });
    const teachinaddressDR = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    const teachingInstance = Teaching.at(teachinaddressDR);
    await professorFacadeInstance
      .insertExam(teachinaddressDR, '15/5/2018', professorContract, studentFacadeInstance.address, { from: address5 });
    const exam = await teachingInstance.getExam.call(0);
    studentFacadeInstance.subscribeToExam(studentContractAddress, exam, { from: address6 });
    professorFacadeInstance
      .publishMark(exam, studentContractAddress, 27, professorContract, { from: address5 });
    studentFacadeInstance.manageMark(studentContractAddress, exam, true, { from: address6 });
    studentFacadeInstance
      .createDegreeRequest(studentContractAddress, 'test title', '27-1-2018', address5, { from: address6 });
    const pending = await DegreeRequestsInstance.pendingDegreeRequestNumber.call();
    assert.equal(pending.toNumber(), 1, 'one pending degree request');
  });

  it('TS0039 can get a degree request', async () => {
    const studentContractAddress = await ListUsersInstance.getUser.call(address6);
    const indexGet = await DegreeRequestsInstance.getDegreeRequestIndex.call(0);
    const addressGet = await DegreeRequestsInstance.getDegreeRequest.call(studentContractAddress);
    assert.equal(indexGet[0], addressGet[0], 'same data');
  });
});
