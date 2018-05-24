const AdminFacade = artifacts.require('./AdminFacade.sol');
const AcademicYearsList = artifacts.require('./AcademicYearsList.sol');
const AcademicYear = artifacts.require('./AcademicYear.sol');
const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';

contract('Testing AcademicYearsList', () => {
  let adminFacadeInstance;
  let AcademicYearsListInstance;

  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });
  AcademicYearsList.deployed().then((inst) => { AcademicYearsListInstance = inst; });

  it('TS0021 can insert an academic year and retrive it', async () => {
    await adminFacadeInstance.addAcademicYear(796, { from: address0 });
    const academicYear = await AcademicYearsListInstance.getAcademicYear.call(796);
    const academicYearInstance = AcademicYear.at(academicYear);
    const year = await academicYearInstance.getYear.call();
    assert.equal(year.toNumber(), 796, 'year is correct');
  });
});
