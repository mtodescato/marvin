pragma solidity 0.4.23;


contract Exam {
    
    mapping(uint => address) private intToStudent;
    mapping(address => uint8) private studentToResult;
    uint private last = 0;
    uint private date;
    
    function Exam(uint _date) public {
        date = _date;
    }

    function setVoto(address student, uint8 mark) public {
        intToStudent[last] = student;
        studentToResult[student] = mark;
        last += 1;
    }

    function getVoto(uint index) public view returns(uint8) {
        require(index < last);
        return studentToResult[intToStudent[index]];
    }

    function getVoto(address student) public view returns(uint8) {
        require(studentToResult[student] != 0);
        return studentToResult[student];
    }

}
