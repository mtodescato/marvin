pragma solidity 0.4.23;

import "./User.sol";
import "./ListUsers.sol";
import "./FactoryMethod.sol";
import "./DomandeLaurea.sol";
import "./AcademicYearsList.sol";
import "./AcademicYear.sol";
import "./DegreeCourse.sol";
import "./Teaching.sol";


contract  AdminFacade {

    ListUsers private userList;
    FactoryMethod private factory;
    DomandeLaurea private domandeLaurea;
    AcademicYearsList private yearsList;

    function AdminFacade(address _userlist, address _factory, address _domande, address _yearsList) public {
        userList = ListUsers(_userlist);
        factory = FactoryMethod(_factory);
        domandeLaurea = DomandeLaurea(_domande);
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

    function gestisciDomandaLaurea(int8 newState, uint domanda) public {
        domandeLaurea.gestisciDomanda(newState, domanda);
    }

    function addAcademicYear( uint _year) public {
        yearsList.insertNewAcademicYears(_year, new AcademicYear(_year));
    }

    function getAcademicYear( uint _year) public view returns(AcademicYear) {
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
