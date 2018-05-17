const ListUsers = artifacts.require('./ListUsers.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
const Exam = artifacts.require('Exam.sol');
const StudentFacade = artifacts.require('StudentFacade.sol');
// const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';
// const address2 = '0xea6d486f25bb15045051ed4e9c63d9781dcf9c87';
// const address3 = '0x095163ece9b776e8c87a1c8949731d18272199c9';
// const address4 = '0xd59ce5657009c7bc357317fa05a7df3b77585485';
// const address5 = '0x4c3408f13b6bdd5ab0b2af10afc9985dd84553a9';
// const address6 = '0xbb1c5ecd6182f7b1095e5281d0105bbcb589238d';
// const address7 = '0x1b23075e7d9fa21cadb1af0bf624d80dfdf084d3';
// const address8 = '0x8422fd812f503ea73df496b884b007cb0b39ae7e';
// const address9 = '0x98b8a8c987ab6037ff014178e7ee05a7605d38f3';


contract('Testing ProfessorFacade', () => {
  let professorFacadeInstance;
  let ListUsersInstance;
  let adminFacadeInstance;
  let studentFacadeInstance;
  let teachinaddress1;
  let teaching;
  let professorContract;

  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });
  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  StudentFacade.deployed().then((inst) => { studentFacadeInstance = inst; });

  it('sets up for testing professorFacade', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss75802975', 12324, address1, 1);
    adminFacadeInstance.addUser('giovanni', 'storti', 'gvnstr75402584', 11424, '0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4', 0);
    adminFacadeInstance.addUser('mario', 'bianchi', 'mrbnc75802975', 12326, '0xe0d040070bb6e4e5dccb4ccd38d773387ea9c7d4', 0);
    professorContract = await ListUsersInstance.getUser.call(address1);
    adminFacadeInstance.addAcademicYear(796);
    adminFacadeInstance.addDegreeCourse(796, 'computer science', 'Mario Rossi', 1);
    const degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(796, 0);
    adminFacadeInstance.addTeaching(degreeCourseAddress, professorContract, 'maths');
    teachinaddress1 = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    teaching = Teaching.at(teachinaddress1);
  });

  it('TS0011 creates an exam', async () => {
    await professorFacadeInstance.insertExam(teachinaddress1, '15/5/2018', professorContract, { from: address1 });
    const exam0 = await teaching.getExam.call(0);
    assert.notEqual(exam0, '0x0000000000000000000000000000000000000000', 'not added correctly');
  });

  it('TS0012 can publish a mark', async () => {
    const studentContractAddress = await studentFacadeInstance
      .getUserContract.call({ from: '0xe0d040077bb6e4e5d2cb4ccd38d763387eaec7d4' });
    const exam = await teaching.getExam.call(0);
    studentFacadeInstance.subscribeToExam(studentContractAddress, exam);
    const examInstance = await Exam.at(exam);
    let examsNumber = await examInstance.getNumberOfMarks.call();
    assert.notEqual(examsNumber.toNumber(), 0, 'no marks for the exam');
    await professorFacadeInstance
      .publishMark(exam, studentContractAddress, 27, professorContract, { from: address1 });
    examsNumber = await examInstance.getNumberOfMarks.call();
    assert.notEqual(examsNumber.toNumber(), 1, 'one mark for the exam');
  });
});
