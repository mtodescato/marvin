pragma solidity 0.4.23;
import "./Ownable.sol";


contract AcademicYear is Ownable {

    mapping(uint => address) private intToDegreeCourse;
    mapping(address => uint) private degreeCourseToInt;
    uint private last = 0;
    uint private year;

    constructor(uint _year) public {
        year = _year;
    }

    function addDegreeCourse(address degreeCourse) public onlyOwner() {
        degreeCourseToInt[degreeCourse] = last;
        intToDegreeCourse[last] = degreeCourse;
        last += 1;
    }

    function getDegreeCourse(uint index) public view returns(address) {
        require(index < last);
        return intToDegreeCourse[index];
    }

    function getYear() public view returns(uint) {
        return year;
    }

    function getNumberOfDC() public view returns(uint) {
        return last;
    }

}
