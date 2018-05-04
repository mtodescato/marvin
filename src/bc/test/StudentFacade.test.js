const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const AdminFacade = artifacts.require('./AdminFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
const gAddress = '0xe0d040070bb9e3ebd2cb4ccd37d773387eaec7d4';


contract('Testing ProfessorFacade', () => {
  let professorFacadeInstance;
  let adminFacadeInstance;

  ProfessorFacade.deployed().then((inst) => { professorFacadeInstance = inst; });
  AdminFacade.deployed().then((inst) => { adminFacadeInstance = inst; });

});