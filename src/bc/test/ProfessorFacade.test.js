const ListUsers = artifacts.require('./ListUsers.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
const StudentFacade = artifacts.require('StudentFacade.sol');
const gAddress = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';


contract('Testing ProfessorFacade', () => {
  let professorFacadeInstance;
  let ListUsersInstance;
  let adminFacadeInstance;
  let studentFacadeInstance;
  let teachingAddress;
  let teaching;
  let professorContract;

  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });
  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  StudentFacade.deployed().then((inst) => { studentFacadeInstance = inst; });

  it('sets up for testing professorFacade', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss75802975', 12324, gAddress, 1);
    adminFacadeInstance.addUser('giovanni', 'storti', 'gvnstr75402584', 11424, '0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4', 0);
    adminFacadeInstance.addUser('mario', 'bianchi', 'mrbnc75802975', 12326, '0xe0d040070bb6e4e5dccb4ccd38d773387ea9c7d4', 0);
    professorContract = await ListUsersInstance.getUser.call(gAddress);
    adminFacadeInstance.addAcademicYear(796);
    adminFacadeInstance.addDegreeCourse(796, 'computer science', 'Mario Rossi', 1);
    const degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(796, 0);
    adminFacadeInstance.addTeaching(degreeCourseAddress, professorContract, 'maths');
    teachingAddress = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    teaching = Teaching.at(teachingAddress);
  });

  it('TS0011 creates an exam', async () => {
    await professorFacadeInstance.insertExam(teachingAddress, '15/5/2018', professorContract);
    const exam0 = await teaching.getExam.call(0);
    assert.notEqual(exam0, '0x0000000000000000000000000000000000000000', 'not added correctly');
  });

  it('TS0012 can publish a mark', async () => {
    const studentContractAddress = await studentFacadeInstance.getUserContract.call({ from: '0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4' });
    const exam = await teaching.getExam.call(0);
    studentFacadeInstance.subscribeToExam(studentContractAddress, exam);
    await professorFacadeInstance.publishMark(exam, studentContractAddress, 27, professorContract);
  });
});
