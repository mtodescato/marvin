// const ListUsers = artifacts.require('./ListUsers.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
const gAddress = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';


contract('Testing ProfessorFacade', () => {
  let professorFacadeInstance;
  // let ListUsersInstance;
  let adminFacadeInstance;
  let teachingAddress;
  let teaching;

  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });
  // ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });
  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });

  it('sets up for testing professorFacade', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss75802975', 12324, gAddress, 1);
    adminFacadeInstance.addUser('giovanni', 'storti', 'gvnstr75402584', 11424, '0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4', 0);
    adminFacadeInstance.addUser('mario', 'bianchi', 'mrbnc75802975', 12326, '0xe0d040070bb6e4e5dccb4ccd38d773387ea9c7d4', 0);
    adminFacadeInstance.addAcademicYear(796);
    adminFacadeInstance.addDegreeCourse(796, 'computer science', 'Mario Rossi', 1);
    const degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(796, 0);
    adminFacadeInstance.addTeaching(degreeCourseAddress, gAddress, 'maths');
    teachingAddress = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    teaching = Teaching.at(teachingAddress);
  });

  it('TS0011 creates an exam', async () => {
    professorFacadeInstance.insertExam(teachingAddress, '15/5/2018', gAddress);
    const exam0 = await teaching.getExam.call(0);
    assert.notEqual(exam0, '0x0000000000000000000000000000000000000000', 'not added correctly');
  });
});
