const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const StudentFacade = artifacts.require('./StudentFacade.sol');
const DegreeRequests = artifacts.require('./DegreeRequests.sol');
const Student = artifacts.require('./Student.sol');
const Exam = artifacts.require('./Exam.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';
const address2 = '0xea6d486f25bb15045051ed4e9c63d9781dcf9c87';
const address3 = '0x095163ece9b776e8c87a1c8949731d18272199c9';
// const address4 = '0xd59ce5657009c7bc357317fa05a7df3b77585485';
// const address5 = '0x4c3408f13b6bdd5ab0b2af10afc9985dd84553a9';
// const address6 = '0xbb1c5ecd6182f7b1095e5281d0105bbcb589238d';
// const address7 = '0x1b23075e7d9fa21cadb1af0bf624d80dfdf084d3';
// const address8 = '0x8422fd812f503ea73df496b884b007cb0b39ae7e';
// const address9 = '0x98b8a8c987ab6037ff014178e7ee05a7605d38f3';


contract('Testing StudentFacade', () => {
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
  let studentContract;
  let DegreeRequestsInstance;

  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });
  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  StudentFacade.deployed().then((inst) => { studentFacadeInstance = inst; });
  ListUsers.deployed().then((inst) => { ListUsersInstance = inst; });
  DegreeRequests.deployed().then((inst) => { DegreeRequestsInstance = inst; });


  it('sets up for testing StudentFacade', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss75802975', 12324, address1, 1, { from: address0 });
    adminFacadeInstance.addUser('giovanni', 'storti', 'gvnstr75402584', 11424, address0, 0, { from: address0 });
    adminFacadeInstance.addUser('mario', 'bianchi', 'mrbnc75802975', 12326, address2, 0, { from: address0 });
    adminFacadeInstance.addUser('ugo', 'ciano', 'ugocin75802975', 12327, address3, 0, { from: address0 });

    adminFacadeInstance.addAcademicYear(796, { from: address0 });
    adminFacadeInstance.addDegreeCourse(796, 'computer science', 'Mario Rossi', 1, { from: address0 });
    degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(796, 0);
    professorContract = await ListUsersInstance.getUser.call(address1);
    adminFacadeInstance
      .addTeaching(degreeCourseAddress, professorContract, 'maths', professorFacadeInstance.address, { from: address0 });
    teachinaddress1 = await adminFacadeInstance.getTeaching.call(degreeCourseAddress, 0);
    teaching = Teaching.at(teachinaddress1);
    professorFacadeInstance
      .insertExam(teachinaddress1, '15/5/2018', professorContract, studentFacadeInstance.address, { from: address1 });
    exam = await teaching.getExam.call(0);
  });

  it('TS0008 get the right contract', async () => {
    studentContractAddress = await studentFacadeInstance.getUserContract.call({ from: address0 });
    const userWithGetUser = await ListUsersInstance.getUser.call(address0);
    assert.equal(studentContractAddress, userWithGetUser, 'address are equal');
  });

  it('TS0009 can subscribe to an exam', async () => {
    const examInstance = Exam.at(exam);
    studentFacadeInstance.subscribeToExam(studentContractAddress, exam, { from: address0 });
    const usrAddressFromExam = await examInstance.getStudentSubscribed.call(0);
    assert.equal(studentContractAddress, usrAddressFromExam, 'not subscribed');
  });

  it('TS0010 can get the number of theaching', async () => {
    const numberBefore = await studentFacadeInstance.getNumberOfTeachings
      .call(studentContractAddress);
    assert.equal(numberBefore.toNumber(), 0, 'no accepted marks');
  });

  it('TS0013 can accept a mark', async () => {
    await professorFacadeInstance
      .publishMark(exam, studentContractAddress, 27, professorContract, { from: address1 });
    await studentFacadeInstance.manageMark(studentContractAddress, exam, true, { from: address0 });
    const numberBefore = await studentFacadeInstance.getNumberOfTeachings
      .call(studentContractAddress);
    assert.equal(numberBefore.toNumber(), 1, 'accepted a mark');
    const passed = await (Student.at(studentContractAddress)).checkPassedTeaching(teachinaddress1);
    assert.equal(passed, true, 'passed the teaching');
  });

  it('TS0014 can get a teaching', async () => {
    teachinaddress1 = await studentFacadeInstance.getTeaching
      .call(0, studentContractAddress);
    assert.notEqual(teachinaddress1, '0x0000000000000000000000000000000000000000', 'not returned a teaching address');
  });

  it('TS0015 can get an exam', async () => {
    const examAddress = await studentFacadeInstance.getExam
      .call(teachinaddress1, studentContractAddress);
    assert.notEqual(examAddress, '0x0000000000000000000000000000000000000000', 'not returned a teaching address');
  });

  it('TS0016 can choose a degree course', async () => {
    studentContract = await ListUsersInstance.getUser.call(address0);
    await studentFacadeInstance.setDegreeCourse(degreeCourseAddress, studentContract);
  });

  it('TS0017 can create a degree request', async () => {
    await (Student.at(studentContractAddress)).setDegreeCourse(degreeCourseAddress);
    await studentFacadeInstance
      .createDegreeRequest(studentContract, 'test title', '27-1-2018', address1);
    const pendingDegreeRequests = await DegreeRequestsInstance.pendingDegreeRequestNumber.call();
    assert.equal(pendingDegreeRequests.toNumber(), 1, 'added degree request');
  });

  it('TS0018 can get the active degree course, when exist', async () => {
    studentContract = await ListUsersInstance.getUser.call(address0);
    await studentFacadeInstance.setDegreeCourse(degreeCourseAddress, studentContract);
    const activeAddress = await studentFacadeInstance.getDegreeCourse(studentContract);
    assert.equal(activeAddress, degreeCourseAddress, 'the address match');
  });

  it('TS0019 can get the active degree course, when not exist ', async () => {
    studentContract = await ListUsersInstance.getUser.call(address3);
    const activeAddressStd = await Student.at(studentContract).getDegreeCourse();
    assert.equal('0x0000000000000000000000000000000000000000', activeAddressStd, 'the address match');
  });
});
