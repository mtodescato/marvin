/* eslint no-loop-func: "off" */

const AdminFacade = artifacts.require('./AdminFacade.sol');
const ProfessorFacade = artifacts.require('./ProfessorFacade.sol');
const ListUsers = artifacts.require('./ListUsers.sol');
const StudentFacade = artifacts.require('./StudentFacade.sol');
const Teaching = artifacts.require('./Teaching.sol');
// const Exam = artifacts.require('./Exam.sol');

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

/* added:
 * 10 users:
 * * 3 owners
 * * 3 professors
 * * 4 students
 * 19 academicYears, from 2000 to 2018
 * 8*19 degreeCourses, 8 degreeCourses for each academicYears
 * 2*8*19 teachings, 2 teachings for each degreeCourses
 * 2*8*19 exams, 1 exam for each teachings
 */
AdminFacade.deployed().then((adminFacadeInstance) => {
  adminFacadeInstance.addUser('owner', 'ballarin', 'bllsmn7580297584', 123335, address0, 2, { from: address0 });
  adminFacadeInstance.addUser('simone2', 'ballarin', 'bllsmn7580297584', 123355, address1, 2, { from: address0 });
  adminFacadeInstance.addUser('simone3', 'ballarin', 'bllsmn7580297584', 123315, address2, 2, { from: address0 });
  adminFacadeInstance.addUser('simone4', 'ballarin', 'bllsmn7580297584', 1233365, address3, 1, { from: address0 });
  adminFacadeInstance.addUser('simone5', 'ballarin', 'bllsmn7580297584', 123385, address4, 1, { from: address0 });
  adminFacadeInstance.addUser('simone6', 'ballarin', 'bllsmn7580297584', 123335, address5, 1, { from: address0 });
  adminFacadeInstance.addUser('simone7', 'ballarin', 'bllsmn7580297584', 123385, address6, 0, { from: address0 });
  adminFacadeInstance.addUser('simone8', 'ballarin', 'bllsmn7580297584', 123345, address7, 0, { from: address0 });
  adminFacadeInstance.addUser('simone9', 'ballarin', 'bllsmn7580297584', 123305, address8, 0, { from: address0 });
  adminFacadeInstance.addUser('simone10', 'ballarin', 'bllsmn7580297584', 1233135, address9, 0, { from: address0 });
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
      const professorContract1 = ListUsers.getUser(address3);
      const professorContract2 = ListUsers.getUser(address4);
      ProfessorFacade.deployed().then(async (professorFacadeInstance) => {
        adminFacadeInstance.addTeaching(await infAdd, address3, 'Inglese B2', professorFacadeInstance.address, { from: address0 });
        adminFacadeInstance.addTeaching(await infAdd, address4, 'Stage', professorFacadeInstance.address, { from: address0 });
        StudentFacade.deployed().then(async (studentFacadeInstance) => {
          const teachingAdd1 = adminFacadeInstance.getTeaching(await infAdd, 0);
          professorFacadeInstance.insertExam(await teachingAdd1, '15/5/2018', await professorContract1, studentFacadeInstance.address, { from: address3 });
          const teachingAdd2 = adminFacadeInstance.getTeaching(await infAdd, 1);
          professorFacadeInstance.insertExam(await teachingAdd2, '15/5/2018', await professorContract2, studentFacadeInstance.address, { from: address4 });
        });
      });
    }
  }
});

/* added:
 * first student have subscribe 2 exams
 * second student have subscribe 2 exams and passed all of them
 */
StudentFacade.deployed().then(async (studentFacadeInstance) => {
  AdminFacade.deployed().then(async (adminFacadeInstance) => {
    const degreeCoursesAdd = adminFacadeInstance.getDegreeCourse(2018, 0);
    const teachingAdd1 = adminFacadeInstance.getTeaching(await degreeCoursesAdd, 0);
    const teachingAdd2 = adminFacadeInstance.getTeaching(await degreeCoursesAdd, 1);
    const teaching1 = Teaching.at(await teachingAdd1);
    const teaching2 = Teaching.at(await teachingAdd2);
    const examAdd1 = (await teaching1).getExam(0);
    const examAdd2 = (await teaching2).getExam(0);
    const studentAdd1 = ListUsers.getUser(address6);
    studentFacadeInstance.subscribeToExam(await studentAdd1, await examAdd1, { from: address6 });
    studentFacadeInstance.subscribeToExam(await studentAdd1, await examAdd2, { from: address6 });
    const studentAdd2 = ListUsers.getUser(address7);
    studentFacadeInstance.subscribeToExam(await studentAdd2, await examAdd1, { from: address7 });
    studentFacadeInstance.subscribeToExam(await studentAdd2, await examAdd2, { from: address7 });
  });
});
