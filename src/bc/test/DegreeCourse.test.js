const AdminFacade = artifacts.require('./AdminFacade.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const DegreeCourse = artifacts.require('./DegreeCourse.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';

contract('Testing DegreeCourse', () => {
  let adminFacadeInstance;
  let professorFacadeInstance;
  let degreeCourseInstance;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });

  it('TS0022 can add and get a Teaching', async () => {
    adminFacadeInstance.addUser('mario', 'rossi', 'mrrss7580297584', 12324, address1, 1);
    adminFacadeInstance.addAcademicYear(797, { from: address0 });
    adminFacadeInstance.addDegreeCourse(797, 'computer science', 'Mario Rossi', 1);
    const degreeCourseAddress = await adminFacadeInstance.getDegreeCourse(797, 0);
    degreeCourseInstance = DegreeCourse.at(degreeCourseAddress);
    adminFacadeInstance
      .addTeaching(degreeCourseAddress, address1, 'maths', professorFacadeInstance.address);
    const teachingAddress = await degreeCourseInstance.getTeaching.call(0);
    assert.notEqual(teachingAddress, '0x0000000000000000000000000000000000000000', 'teaching not null');
  });

  it('TS0023 can get the number of teachings', async () => {
    const numberOfTeachings = await degreeCourseInstance.getNumberOfTeachings.call();
    assert.equal(numberOfTeachings.toNumber(), 1, 'correct number of teachings');
  });

  it('TS0023 can get the degree course name', async () => {
    const degreeCourseName = await degreeCourseInstance.getDegreeCourseName.call();
    assert.equal(web3.toAscii(degreeCourseName), 'computer science', 'correct degree course name');
  });

  it('TS0024 can get the degree course president', async () => {
    const degreeCoursePresident = await degreeCourseInstance.getDegreeCoursePresident.call();
    assert.equal(web3.toAscii(degreeCoursePresident), 'Mario Rossi', 'correct degree course president');
  });

  it('TS0025 can get the degree course type', async () => {
    const type = await degreeCourseInstance.getDegreeCourseType.call();
    assert.equal(type.toNumber(), 1, 'correct degree type');
  });
});
