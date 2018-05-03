pragma solidity 0.4.23;


contract DegreeCourse {
    mapping(uint => address) private intToTeaching;
    mapping(address => uint) private teachingToInt;
    uint private last = 0;
    bytes private degreeCourseName;
    bytes private degreeCoursePresident;
    uint8 private degreeCourseType;

    function DegreeCourse(bytes _degreeCourseName, bytes _degreeCoursePresident, uint8 _degreeCourseType) public {
        degreeCourseName = _degreeCourseName;
        degreeCoursePresident = _degreeCoursePresident;
        degreeCourseType = _degreeCourseType;
    }

    function addTeaching(address teaching) public {
        teachingToInt[teaching] = last;
        intToTeaching[last] = teaching;
        last += 1;
    }

    function getTeaching(uint index) public view returns(address) {
        require(index < last);
        return intToTeaching[index];
    }

    function getNumberOfTeachings() public view returns(uint) {
        return last;
    }

    function getDegreeCourseName() public view return(bytes) {
        return degreeCourseName;
    }

    function getDegreeCoursePresident() public view return(bytes) {
        return degreeCoursePresident;
    }

    function getDegreeCourseType() public view return(uint8) {
        return degreeCourseType;
    }
}
