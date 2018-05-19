pragma solidity 0.4.23;
import "./User.sol";
import "./ListUsers.sol";
import "./FactoryMethod.sol";
import "./DegreeRequests.sol";
import "./AcademicYearsList.sol";
import "./AcademicYear.sol";
import "./DegreeCourse.sol";
import "./Teaching.sol";


/**@title Admin Facade */
contract  AdminFacade {

    ListUsers private userList;
    FactoryMethod private factory;
    DegreeRequests private degreeRequests;
    AcademicYearsList private yearsList;

    /**@dev Check if the user requesting the action is an admin or the master admin.*/
    modifier isAdmin() {
        if (msg.sender != userList.getMasterAdminAddress() && userList.getType(msg.sender) != 2) revert();
        _;
    }

    /**@dev Constructor of AdminFacade
    *  @param _userlist Address of the contract ListUser containing all the users.
    *  @param _factory Address to the contrat of the factory method for the users.
    *  @param _degreeRequests Address to the DegreeRequest contract containig the list of the degree requests.
    *  @param _yearsList Address of the list of the Academic years.
    */
    constructor(address _userlist, address _factory, address _degreeRequests, address _yearsList) public {
        userList = ListUsers(_userlist);
        factory = FactoryMethod(_factory);
        degreeRequests = DegreeRequests(_degreeRequests);
        yearsList = AcademicYearsList(_yearsList);
    }

    /**@dev Create and add a new user to the user list.
    *  @param _name Name of the user
    *  @param _surname Surname of the user
    *  @param _socialNumber Social number of the user
    *  @param _serialNumber Number used internally to the university to recognise the students.
    *  @param _owner Address of the future owner of the user account that will be created.
    *  @param _type Type of the user:0 for student, 1 for professor, 2 for admin.
    */
    function addUser(bytes _name, bytes _surname, bytes _socialNumber, uint _serialNumber, address _owner, uint8  _type)
    public
    isAdmin() 
    {
        address newUser = factory.createUser(_name, _surname, _socialNumber, _serialNumber, _owner, _type);
        userList.addUser(newUser, _type, _owner);
    }

    /**@dev remove an user form the userlist.
    *  @param accountAddress Address of the contract owner.
    */
    function removeUser(address accountAddress) public isAdmin() {
        userList.removeUser(accountAddress);
    }

    /**@dev Allow to accept or reject a degree request.
    *  @param newState The new state for the request 1 for accepted or -1 for rejected.
    *  @param request index of the degree request.
    */
    function mangeDegreeRequest(int8 newState, uint request) public isAdmin() {
        degreeRequests.manageRequest(newState, request);
    }

    /**@dev create a new academic year and add it to the list of academic years.
    *  @param _year Numer of the year to create.
    */
    function addAcademicYear( uint _year) public isAdmin() {
        yearsList.insertNewAcademicYears(_year, address(new AcademicYear(_year)));
    }

    /**@dev Get the address of the academic year.
    *  @param _year Year of the academic year wanted
    *  @return address Address of the contract of the academic year.
    */
    function getAcademicYear( uint _year) public view returns(address) {
        return yearsList.getAcademicYear(_year);
    }

    /**@dev Create and add to the course list a new DegreeCourse.
    *  @param academicYear Accademic year of the course.
    *  @param name Name of the degree course.
    *  @param president Name of the course chief.
    *  @param typeDegree Type of the degree course.
    */
    function addDegreeCourse( uint academicYear, bytes name, bytes president, uint8 typeDegree) 
    public 
    isAdmin()
    {
        DegreeCourse dCourse = new DegreeCourse(name, president, typeDegree);
        address acYear = yearsList.getAcademicYear(academicYear);
        AcademicYear acYearObj = AcademicYear(acYear);
        acYearObj.addDegreeCourse(dCourse);
    }

    /**@dev Get a degree course from un academic year given an index.
    *  @param academicYear Year of the academic calendar.
    *  @param index Index of the degree course.
    *  @return address The address of the degree course.
    */
    function getDegreeCourse(uint academicYear, uint index) public view returns(address) {
        address acYear = yearsList.getAcademicYear(academicYear);
        AcademicYear acYearObj = AcademicYear(acYear);
        return acYearObj.getDegreeCourse(index);
    }

    /**@dev Get the number of degree course in the specify academic year.
    *  @param academicYear Year of the academic calendar.
    *  @return address The uint that rappresent the cardinality of the academic year.
    */
    function getNumberOfDC(uint academicYear) public view returns(uint) {
        address acYear = yearsList.getAcademicYear(academicYear);
        AcademicYear acYearObj = AcademicYear(acYear);
        return acYearObj.getNumberOfDC();
    }

    /**@dev Create and add a new teaching to the DegreeCourse.
    *  @param course Address of the DegreeCourse.
    *  @param refProfessor Address of the professor of the teching.
    *  @param name Name of the teaching.
    *  @param professorFacade Address of the professor facade contract needed for acces control.
    */
    function addTeaching(address course, address refProfessor, bytes name, address professorFacade) public isAdmin() {
        DegreeCourse dCourse = DegreeCourse(course);
        Teaching newTeach = new Teaching(refProfessor, name);
        newTeach.transfertOwnernship(professorFacade);
        dCourse.addTeaching(address(newTeach));
    }

    /**@dev Return a teaching given its degree course address and an index.
    *  @param course Address of the degree course that owns the teaching.
    *  @param index Index of the teaching in the degree course list.
    *  @return address The address of the teaching.
    */
    function getTeaching(address course, uint index) public view returns(address) {
        DegreeCourse dCourse = DegreeCourse(course);
        return dCourse.getTeaching(index);
    }

}
