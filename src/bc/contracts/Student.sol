pragma solidity 0.4.23;
import "./User.sol";


contract Student is User {

    address private degreeCourse;
    mapping(address => address) private teachingToExam; //solo se l'esame e' accettato
    mapping(uint => address) private intToTeaching;
    uint private last = 0;

    constructor(bytes _name, bytes _surname, bytes _socialNumber, uint _serial)
    public
    User(_name, _surname, _socialNumber, _serial)
    {}

    function insertPassedExam (address teaching, address exam) public {
        teachingToExam[teaching] = exam;
        intToTeaching[last] = teaching;
        last += 1;
    }

    function getNumberOfTeachings() public view returns(uint) {
        return last;
    }

    function getTeaching(uint index) public view returns(address) {
        require(index < last);
        return intToTeaching[index];
    }

    function getExam(address teaching) public view returns(address) {
        require(teachingToExam[teaching] != 0x0);
        return teachingToExam[teaching];
    }

    function checkPassedTeaching(address teaching) public view returns(bool) {
        bool result = teachingToExam[teaching] != 0x0;
        return result;
    }

    function getDegreeCourse() public view returns(address) {
        return degreeCourse;
    }

    function setDegreeCourse(address degreeC) public {
        degreeCourse = degreeC;
    }
}
