const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const StudentFacade = artifacts.require('StudentFacade.sol');
const Exam = artifacts.require('./Exam.sol');
const gAddress = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';


contract('Testing StudentFacade', () => {
  let professorFacadeInstance;
  let adminFacadeInstance;
  let studentFacadeInstance;
  let ListUsersInstance;
  let teachingAddress;
  let teaching;
  let exam;
  let studentContractAddress;

  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });
  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  StudentFacade.deployed().then((inst) => { studentFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });


  it('sets up for testing StudentFacade', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss75802975', 12324, gAddress, 1);
    adminFacadeInstance.addUser('giovanni', 'storti', 'gvnstr75402584', 11424, '0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4', 0);
    adminFacadeInstance.addUser('mario', 'bianchi', 'mrbnc75802975', 12326, '0xe0d040070bb6e4e5dccb4ccd38d773387ea9c7d4', 0);
    adminFacadeInstance.addAcademicYear(796);
    adminFacadeInstance.addDegreeCourse(796, 'computer science', 'Mario Rossi', 1);
    const degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(796, 0);
    adminFacadeInstance.addTeaching(degreeCourseAddress, gAddress, 'maths');
    teachingAddress = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    teaching = Teaching.at(teachingAddress);
    professorFacadeInstance.insertExam(teachingAddress, '15/5/2018', gAddress);
    exam = await teaching.getExam.call(0);
  });

  it('TS0008 get the right contract', async () => {
    studentContractAddress = await studentFacadeInstance.getUserContract.call({ from: '0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4' });
    const userWithGetUser = await ListUsersInstance.getUser.call('0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4');
    assert.equal(studentContractAddress, userWithGetUser, 'address are equal');
  });

  it('TS0009 can subscribe to an exam', async () => {
    const examInstance = Exam.at(exam);
    studentFacadeInstance.subscribeToExam(studentContractAddress, exam);
    const usrAddressFromExam = await examInstance.getStudentSubscribed.call(0);
    assert.equal(studentContractAddress, usrAddressFromExam, 'not subscribed');
  });

  it('TS0010 can get the number of theaching', async () => {
    const numberBefore = await studentFacadeInstance.getNumberOfTeachings
      .call(studentContractAddress);
    assert.equal(numberBefore.toNumber(), 0, 'no accepted marks');
  });

  /*
  it('TS0010 can get the number of theaching', async () => {
    const numberBefore = await studentFacadeInstance.getTeaching
      .call(0, studentContractAddress);
  });
  */
  /*
  it('TSxxxx can get the number of theaching', async () => {
    const professorContract = await ListUsersInstance.getUser.call(gAddress);
    const studentContract = await ListUsersInstance
      .getUser.call('0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4');
    studentFacadeInstance
      .createDegreeRequest(studentContract, 'test title', '27-1-2018', professorContract);
  });
  */
});
