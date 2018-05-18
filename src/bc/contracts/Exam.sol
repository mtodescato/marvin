pragma solidity 0.4.23;
import "./Teaching.sol";


contract Exam {

    mapping(uint => address) private intToStudent;
    mapping(address => uint) private studentToInt;
    mapping(address => uint8) private studentToResult; // 0 quando il Mark non e' stato assegnato
    mapping(address => bool) private acceptedMarks;
    uint private last = 0;
    bytes private date;
    address private teaching;

    modifier onlyPassed(address student) {
        require(studentToResult[student] >= 18);
        _;
    }

    modifier onlySubscribed(address student) {
        uint ipoteticPos = studentToInt[student];
        require(intToStudent[ipoteticPos] != 0x0);
        _;
    }

    modifier onlyGivenMark(address student) {
        require(studentToResult[student] != 0);
        _;
    }
    
    modifier onlyReferenceProf(address prof) {
        Teaching teach = Teaching(teaching);
        address professor = teach.getReferenceProfessor();
        require(prof == professor);
        _;
    }

    constructor(address teach, bytes _date) public {
        date = _date;
        teaching = teach;
    }

    function setMark(address student, uint8 mark, address senderProfessor)
    public
    onlySubscribed(student)
    onlyReferenceProf(senderProfessor)
    {
        intToStudent[last] = student;
        studentToResult[student] = mark;
        last += 1;
    }

    function manageMark(address student, bool mark) public onlyPassed(student) {
        acceptedMarks[student] = mark;
    }

    function getMark(uint index) public view returns(uint8) {
        require(index < last);
        return studentToResult[intToStudent[index]];
    }

    function getMark(address student) public onlyGivenMark(student) view returns(uint8) {
        return studentToResult[student];
    }

    function getTeaching() public view returns(address) {
        return teaching;
    }

    function getNumberOfMarks() public view returns(uint) {
        return last;
    }

    function getStudentSubscribed(uint index) public view returns(address) {
        require(index < last);
        return intToStudent[index];
    }

    function subscribe(address student) public {
        intToStudent[last] = student;
        studentToInt[student] = last;
        last += 1;
    }
}
