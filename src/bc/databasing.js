const AdminFacade = artifacts.require('./AdminFacade.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');

const address0 = '0xd915bb5fcf25ff607f852fa77822dfc757abd9ba';
const address1 = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';
const address2 = '0xea6d486f25bb15045051ed4e9c63d9781dcf9c87';
const address3 = '0x095163ece9b776e8c87a1c8949731d18272199c9';
const address4 = '0xd59ce5657009c7bc357317fa05a7df3b77585485';
const address5 = '0x4c3408f13b6bdd5ab0b2af10afc9985dd84553a9';
const address6 = '0xbb1c5ecd6182f7b1095e5281d0105bbcb589238d';
const address7 = '0x1b23075e7d9fa21cadb1af0bf624d80dfdf084d3';
const address8 = '0x8422fd812f503ea73df496b884b007cb0b39ae7e';
const address9 = '0x98b8a8c987ab6037ff014178e7ee05a7605d38f3';

AdminFacade.deployed().then((adminFacadeInstance) => {
  adminFacadeInstance.addUser('simone1', 'ballarin', 'bllsmn7580297584', 123335, address0, 0, { from: address0 });
  adminFacadeInstance.addUser('simone2', 'ballarin', 'bllsmn7580297584', 123355, address1, 0, { from: address0 });
  adminFacadeInstance.addUser('simone3', 'ballarin', 'bllsmn7580297584', 123315, address2, 0, { from: address0 });
  adminFacadeInstance.addUser('simone4', 'ballarin', 'bllsmn7580297584', 1233365, address3, 1, { from: address0 });
  adminFacadeInstance.addUser('simone5', 'ballarin', 'bllsmn7580297584', 123385, address4, 1, { from: address0 });
  adminFacadeInstance.addUser('simone6', 'ballarin', 'bllsmn7580297584', 123335, address5, 1, { from: address0 });
  adminFacadeInstance.addUser('simone7', 'ballarin', 'bllsmn7580297584', 123385, address6, 2, { from: address0 });
  adminFacadeInstance.addUser('simone8', 'ballarin', 'bllsmn7580297584', 123345, address7, 2, { from: address0 });
  adminFacadeInstance.addUser('simone9', 'ballarin', 'bllsmn7580297584', 123305, address8, 2, { from: address0 });
  adminFacadeInstance.addUser('simone10', 'ballarin', 'bllsmn7580297584', 1233135, address9, 2, { from: address0 });
  adminFacadeInstance.addAcademicYear(2012, { from: address0 });
  for (let y = 2000; y <= 2018; y += 1) {
    adminFacadeInstance.addAcademicYear(Number(y), { from: address0 });
    adminFacadeInstance.addDegreeCourse(Number(y), 'Informatica', 'Ranzato Franzo', 0, { from: address0 });
    adminFacadeInstance.addDegreeCourse(Number(y), 'Matematica', 'Ranzato Franzo', 0, { from: address0 });
    adminFacadeInstance.addDegreeCourse(Number(y), 'Data Science', 'Ranzato Franzo', 0, { from: address0 });
    adminFacadeInstance.addDegreeCourse(Number(y), 'Filosofia', 'Ranzato Franzo', 0, { from: address0 });
    adminFacadeInstance.addDegreeCourse(Number(y), 'Informatica Magistrale', 'Ranzato Franzo', 1, { from: address0 });
    adminFacadeInstance.addDegreeCourse(Number(y), 'Matematica Magistrale', 'Ranzato Franzo', 1, { from: address0 });
    adminFacadeInstance.addDegreeCourse(Number(y), 'Data Science Magistrale', 'Ranzato Franzo', 1, { from: address0 });
    adminFacadeInstance.addDegreeCourse(Number(y), 'Filosofia Magistrale', 'Ranzato Franzo', 1, { from: address0 });

    for (let i = 0; i < 8; i += 1) {
      const infAdd = adminFacadeInstance.getDegreeCourse(Number(y), Number(i));
      ProfessorFacade.deployed().then(async (professorFacadeInstance) => {
        adminFacadeInstance.addTeaching(await infAdd, address3, 'Inglese B2', professorFacadeInstance.address, { from: address0 });
        adminFacadeInstance.addTeaching(await infAdd, address4, 'Stage', professorFacadeInstance.address, { from: address0 });
      });
    }
  }
});
