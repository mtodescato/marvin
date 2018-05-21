const AdminFacade = artifacts.require('./AdminFacade.sol');
const AcademicYear = artifacts.require('./AcademicYear.sol');
const DegreeCourse = artifacts.require('./DegreeCourse.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';


contract('Testing AcademicYear', () => {
  let adminFacadeInstance;
  let AcademicYearInstance;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });

  it('can add and retrive a degree course', async () => {
    adminFacadeInstance.addAcademicYear(797, { from: address0 });
    const AcademicYearAddress = await adminFacadeInstance.getAcademicYear(797);
    AcademicYearInstance = AcademicYear.at(AcademicYearAddress);
    await adminFacadeInstance.addDegreeCourse(797, 'computer science', 'Mario Rossi', 1, { from: address0 });
    const degreeCourseAddress = await AcademicYearInstance.getDegreeCourse(0);
    const DegreeCourseInstance = DegreeCourse.at(degreeCourseAddress);
    const courseName = await DegreeCourseInstance.getDegreeCourseName.call();
    assert.equal(web3.toAscii(courseName), 'computer science', 'degree course is correct');
  });

  it('can get the number of the academic year', async () => {
    const academicYear = await AcademicYearInstance.getYear.call();
    assert.equal(academicYear.toNumber(), 797, 'year is correct');
  });

  it('can get the number of degree courses', async () => {
    const degreeCourseNumber = await AcademicYearInstance.getNumberOfDC.call();
    assert.equal(degreeCourseNumber.toNumber(), 1, 'year is correct');
  });
});
