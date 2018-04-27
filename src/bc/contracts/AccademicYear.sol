pragma solidity 0.4.23;


contract AccademicYear {
    
    mapping(uint => address) private intToDegreeCourse;
    mapping(address => uint) private degreeCourseToInt;
    uint private last = 0;
    uint private year;
    
    function AccademicYear(uint _year) public {
        year = _year;
    }

    function addDegreeCourse(address degreeCourse) public {
        degreeCourseToInt[degreeCourse] = last;
        intToDegreeCourse[last] = degreeCourse;
        last += 1;
    }

    function getDegreeCourse(uint index) public view returns(address) {
        require(index < last);
        return intToDegreeCourse[index];
    }

}
