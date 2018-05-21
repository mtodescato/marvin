const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const StudentFacade = artifacts.require('StudentFacade.sol');
const Exam = artifacts.require('./Exam.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';
const address2 = '0xea6d486f25bb15045051ed4e9c63d9781dcf9c87';

contract('Testing Exam', () => {
  let professorFacadeInstance;
  let adminFacadeInstance;
  let studentFacadeInstance;
  let ListUsersInstance;
  let teachinaddress1;
  let teaching;
  let exam;
  let studentContractAddress;
  let professorContract;
  let degreeCourseAddress;
  let examInstance;

  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });
  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  StudentFacade.deployed().then((inst) => { studentFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });


  it('sets up for testing Exam', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss75802975', 12324, address1, 1, { from: address0 });
    adminFacadeInstance.addUser('giovanni', 'storti', 'gvnstr75402584', 11424, address2, 0, { from: address0 });
    adminFacadeInstance.addAcademicYear(796, { from: address0 });
    adminFacadeInstance.addDegreeCourse(796, 'computer science', 'Mario Rossi', 1, { from: address0 });
    degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(796, 0);
    professorContract = await ListUsersInstance.getUser.call(address1);
    studentContractAddress = await ListUsersInstance.getUser.call(address2);
    adminFacadeInstance
      .addTeaching(degreeCourseAddress, professorContract, 'maths', professorFacadeInstance.address, { from: address0 });
    teachinaddress1 = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    teaching = Teaching.at(teachinaddress1);
    professorFacadeInstance
      .insertExam(teachinaddress1, '15/5/2018', professorContract, studentFacadeInstance.address, { from: address1 });
    exam = await teaching.getExam.call(0);
    examInstance = Exam.at(exam);
    studentFacadeInstance.subscribeToExam(studentContractAddress, exam, { from: address2 });
    await professorFacadeInstance
      .publishMark(exam, studentContractAddress, 27, professorContract, { from: address1 });
  });

  it('can get a mark', async () => {
    const intMark = await examInstance.getMarkIndex.call(0);
    const addressMark = await examInstance.getMark.call(studentContractAddress);
    assert.equal(addressMark.toNumber(), intMark.toNumber(), 'functions returns the same');
    assert.equal(intMark.toNumber(), 27, 'correct mark');
  });

  it('can get teaching', async () => {
    const teachingAddress = await examInstance.getTeaching.call();
    assert.notEqual(teachingAddress, '0x0000000000000000000000000000000000000000', 'address not null');
  });

  it('can get number of students', async () => {
    const numberOfStudents = await examInstance.getNumberOfStudents.call();
    assert.equal(numberOfStudents.toNumber(), 1, 'Correct number of students');
  });

  it('can get the number of inserted marks', async () => {
    const numberOfMarks = await examInstance.getNumberOfMarks.call();
    assert.equal(numberOfMarks.toNumber(), 1, 'correct number of marks');
  });

  it('can get a subscribed student', async () => {
    const studentSubscribed = await examInstance.getStudentSubscribed.call(0);
    assert.equal(studentSubscribed, studentContractAddress, 'address is correct');
  });
});
