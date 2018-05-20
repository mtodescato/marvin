pragma solidity 0.4.23;
import "./Ownable.sol";


/** @title AcademicYear*/
contract AcademicYear is Ownable {

    mapping(uint => address) private intToDegreeCourse;
    mapping(address => uint) private degreeCourseToInt;
    uint private last = 0;
    uint private year;

    /** @dev constructor of academicYear.
    *   @param _year number of the academic year.
    */
    constructor(uint _year) public {
        year = _year;
    }

    /** @dev Add a degree course to the courses of the academic year.
    *   @param degreeCourse address of the degree course to be insert in the academic year.
    */
    function addDegreeCourse(address degreeCourse) public onlyOwner() {
        degreeCourseToInt[degreeCourse] = last;
        intToDegreeCourse[last] = degreeCourse;
        last += 1;
    }

    /** @dev Get a degree course given an index.
    *   @param index index of the degree course in the map.
    *   @return address address of the degree course.
    */
    function getDegreeCourse(uint index) public view returns(address) {
        require(index < last);
        return intToDegreeCourse[index];
    }

    /** @dev Get the number of the academic year.
    *   @param uint return the academic year number.
    */
    function getYear() public view returns(uint) {
        return year;
    }

    /** @dev Get the number of the degree courses in the academic year.
    *   @param uint number of the degree courses.
    */
    function getNumberOfDC() public view returns(uint) {
        return last;
    }

}
