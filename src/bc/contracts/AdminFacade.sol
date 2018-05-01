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

    /**@dev Constructor of AdminFacade
    *  @param _userlist Address of the contract ListUser containing all the users.
    *  @param _factory Address to the contrat of the factory method for the users.
    *  @param _degreeRequests Address to the DegreeRequest contract containig the list of the degree requests.
    *  @param _yearList Address of the list of the Academic years.
    */
    function AdminFacade(address _userlist, address _factory, address _degreeRequests, address _yearsList) public {
        userList = ListUsers(_userlist);
        factory = FactoryMethod(_factory);
        degreeRequests = DegreeRequests(_degreeRequests);
        yearsList = AcademicYearsList(_yearsList);
    }

    /**@dev Create and add a new user to the user list.
    *  @param _name 
    *  @param _surname 
    *  @param _socialNumber
    *  @param _serialNumber Number used internally to the university to recognise the students.
    *  @param _owner Address of the future owner of the user account that will be created.
    *  @param _type Type of the user:0 for student, 1 for professor, 2 for admin.
    */
    function addUser(bytes _name, bytes _surname, bytes _socialNumber, uint _serialNumber, address _owner, uint8  _type)
    public {
        address newUser = factory.createUser(_name, _surname, _socialNumber, _serialNumber, _owner, _type);
        userList.addUser(newUser, _type, _owner);
    }

    /**@dev remove an user form the userlist.
    *  @param accountAddress Address of the contract owner.
    */
    function removeUser(address accountAddress) public {
        userList.removeUser(accountAddress);
    }

    /**@dev Allow to accept or reject a degree request.
    *  @param newState The new state for the request 1 for accepted or -1 for rejected.
    *  @param request index of the degree request.
    */
    function mangeDegreeRequest(int8 newState, uint request) public {
        degreeRequests.manageRequest(newState, request);
    }

    /**@dev create a new academic year and add it to the list of academic years.
    *  @param _year Numer of the year to create.
    */
    function addAcademicYear( uint _year) public {
        yearsList.insertNewAcademicYears(_year, new AcademicYear(_year));
    }

    /**@dev Get the address of the academic year.
    *  @param _year 
    *  @return address Address of the contract of the academic year.
    */
    function getAcademicYear( uint _year) public view returns(address) {
        yearsList.getAcademicYear(_year);
    }

    /**@dev Create and add to the course list a new DegreeCourse.
    *  @param academicYear Accademic year of the course.
    *  @param name Name of the degree course.
    *  @param president Name of the course chief.
    *  @param typeDegree Type of the degree course.
    */
    function addDegreeCourse( uint academicYear, bytes name, bytes president, uint8 typeDegree) public {
        DegreeCourse dCourse = new DegreeCourse(name, president, typeDegree);
        address acYear = yearsList.getAcademicYear(academicYear);
        AcademicYear acYearObj = AcademicYear(acYear);
        acYearObj.addDegreeCourse(dCourse);
    }

    /**@dev Create and add a new teaching to the DegreeCourse.
    *  @param course Address of the DegreeCourse.
    *  @param refProfessor Address of the professor of the teching.
    *  @param name
    */
    function addTeaching(address course, address refProfessor, bytes name) public {
        DegreeCourse dCourse = DegreeCourse(course);
        Teaching newTeach = new Teaching(refProfessor, name);
        dCourse.addTeaching(address(newTeach));
    }

}
