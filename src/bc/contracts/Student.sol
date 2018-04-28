pragma solidity 0.4.23;
import "./User.sol";


contract Student is User {

    address private degreeCourse;

    function Student(bytes _name, bytes _surname, bytes _socialNumber, uint _serial)
    public
    User(_name, _surname, _socialNumber, _serial)
    {}

    mapping(address => address) private teachingToExam; //solo se l'esame e' accettato

    function insertPassedExam (address teaching, address exam) public {
        teachingToExam[teaching] = exam;
    }

    function getDegreeCourse() public view returns(address) {
        return degreeCourse;
    }

    function setDegreeCourse(address degreeC) public {
        degreeCourse = degreeC;
    } 
}
