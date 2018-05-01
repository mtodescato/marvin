pragma solidity 0.4.23;

import "./User.sol";
import "./ListUsers.sol";
import "./FactoryMethod.sol";
import "./DegreeRequest.sol";
import "./AcademicYearsList.sol";
import "./AcademicYear.sol";
import "./DegreeCourse.sol";
import "./Teaching.sol";


contract  AdminFacade {

    ListUsers private userList;
    FactoryMethod private factory;
    DegreeRequests private degreeRequests;
    AcademicYearsList private yearsList;

    function AdminFacade(address _userlist, address _factory, address _degreeRequests, address _yearsList) public {
        userList = ListUsers(_userlist);
        factory = FactoryMethod(_factory);
        degreeRequests = DegreeRequests(_degreeRequests);
        yearsList = AcademicYearsList(_yearsList);
    }

    function addUser(bytes _name, bytes _surname, bytes _socialNumber, uint _serialNumber, address _owner, uint8  _type)
    public {
        address newUser = factory.createUser(_name, _surname, _socialNumber, _serialNumber, _owner, _type);
        userList.addUser(newUser, _type, _owner);
    }

    function removeUser(address accountAddress) public {
        userList.removeUser(accountAddress);
    }

    function mangeDegreeRequest(int8 newState, uint request) public {
        degreeRequests.manageRequest(newState, request);
    }

    function addAcademicYear( uint _year) public {
        yearsList.insertNewAcademicYears(_year, new AcademicYear(_year));
    }

    function getAcademicYear( uint _year) public view returns(address) {
        yearsList.getAcademicYear(_year);
    }

    function addDegreeCourse( uint academicYear, bytes name, bytes president, uint8 typeDegree) public {
        DegreeCourse dCourse = new DegreeCourse(name, president, typeDegree);
        address acYear = yearsList.getAcademicYear(academicYear);
        AcademicYear acYearObj = AcademicYear(acYear);
        acYearObj.addDegreeCourse(dCourse);
    }

    function addTeaching(address course, address refProfessor, bytes name) public {
        DegreeCourse dCourse = DegreeCourse(course);
        Teaching newTeach = new Teaching(refProfessor, name);
        dCourse.addTeaching(address(newTeach));
    }

}
