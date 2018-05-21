pragma solidity 0.4.23;
import "./Ownable.sol";


/** @title DegreeCourse */
contract DegreeCourse is Ownable {
    mapping(uint => address) private intToTeaching;
    mapping(address => uint) private teachingToInt;
    uint private last = 0;
    bytes private degreeCourseName;
    bytes private degreeCoursePresident;
    uint8 private degreeCourseType;

    /** @dev Constructor of the DegreeCOurse contract.
    *   @param _degreeCourseName Name of the degree course.
    *   @param _degreeCoursePresident Name of the degree course president.
    *   @param _degreeCourseType Type of the degree course. 
    */
    constructor(bytes _degreeCourseName, bytes _degreeCoursePresident, uint8 _degreeCourseType) public {
        degreeCourseName = _degreeCourseName;
        degreeCoursePresident = _degreeCoursePresident;
        degreeCourseType = _degreeCourseType;
    }

    /** @dev Add a theaching to the mapping.
    *   @param teaching address of the teaching.
    */
    function addTeaching(address teaching) public onlyOwner() {
        teachingToInt[teaching] = last;
        intToTeaching[last] = teaching;
        last += 1;
    }

    /** @dev Get a teaching given an index.
    *   @param index uint of the teaching.
    *   @return address theaching contract address.
    */
    function getTeaching(uint index) public view returns(address) {
        require(index < last);
        return intToTeaching[index];
    }

    /** @dev Get the number of teachings.
    *   @return uint number of the teachings.
    */
    function getNumberOfTeachings() public view returns(uint) {
        return last;
    }

    /** @dev Get degree course name.
    *   @return bytes degree course name.
    */
    function getDegreeCourseName() public view returns(bytes) {
        return degreeCourseName;
    }

    /** @dev Get degree course president.
    *   @return bytes degree course president name.
    */
    function getDegreeCoursePresident() public view returns(bytes) {
        return degreeCoursePresident;
    }

    /** @dev Get the degree course type.
    *   @return uint8 type of the degree course.
    */
    function getDegreeCourseType() public view returns(uint8) {
        return degreeCourseType;
    }
}
