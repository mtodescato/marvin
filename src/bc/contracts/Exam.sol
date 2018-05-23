pragma solidity 0.4.23;
import "./Teaching.sol";
import "./Ownable.sol";


/** @title Exam*/
contract Exam is Ownable {

    mapping(uint => address) private intToStudent;
    mapping(address => uint) private studentToInt;
    mapping(address => uint8) private studentToResult; // 0 quando il Mark non e' stato assegnato
    mapping(address => bool) private acceptedMarks;
    uint private last = 0;
    uint private insertedMarks = 0;
    bytes private date;
    address private teaching;
    address private studentFacade;

    /** @dev Check if the transaction is sent by the student facade.*/
    modifier onlyStudentFacade() {
        require(msg.sender == studentFacade);
        _;
    }

    /** @dev Check if the student has passed the exam.
    *   @param student address of the student contract.
    */
    modifier onlyPassed(address student) {
        require(studentToResult[student] >= 18);
        _;
    }

    /** @dev Check if the student is subscibed to the exam.
    *   @param student address of the student contract.
    */
    modifier onlySubscribed(address student) {
        uint ipoteticPos = studentToInt[student];
        require(intToStudent[ipoteticPos] != 0x0);
        _;
    }

    /** @dev Check if the student has a mark for the exam.
    *   @param student address of the student contract.
    */
    modifier onlyGivenMark(address student) {
        require(studentToResult[student] != 0);
        _;
    }
    
    /** @dev Check if the refernce professor requesting the transaction.
    *   @param prof address of the professor contract.
    */
    modifier onlyReferenceProf(address prof) {
        Teaching teach = Teaching(teaching);
        address professor = teach.getReferenceProfessor();
        require(prof == professor);
        _;
    }

    /** @dev Constructor of exam.
    *   @param teach address of the teaching of the exam.
    *   @param _date date of the exam.
    *   @param _studentFacade address of the student facade.
    */
    constructor(address teach, bytes _date, address _studentFacade) public {
        date = _date;
        teaching = teach;
        studentFacade = _studentFacade;
    }

    /** @dev Set a mark for a student.
    *   @param student addess of the student contract.
    *   @param mark uint8 of the mark.
    *   @param senderProfessor address of the professor contract.
    */
    function setMark(address student, uint8 mark, address senderProfessor)
    public
    onlyOwner()
    onlySubscribed(student)
    onlyReferenceProf(senderProfessor)
    {
        intToStudent[last] = student;
        studentToResult[student] = mark;
        insertedMarks += 1;
        
    }

    /** @dev The student accept or reject a mark.
    *   @param student address of the student contract.
    *   @param mark bool for accept of reject mark.  
    */
    function manageMark(address student, bool mark) 
    public
    onlyStudentFacade() 
    onlyPassed(student) 
    {
        acceptedMarks[student] = mark;
    }

    /** @dev Get a mark given an index.
    *   @param index uint of the mark.
    *   @return uint8 result of the exam.  
    */
    function getMarkIndex(uint index) public view returns(uint8) {
        require(index < last);
        return studentToResult[intToStudent[index]];
    }

    /** @dev Get a mark given a student address.
    *   @param student address of the student contract.
    *   @return uint8 result of the exam.  
    */
    function getMark(address student) public onlyGivenMark(student) view returns(uint8) {
        return studentToResult[student];
    }

    /** @dev Get the teaching of the exam.
    *   @return address address of the teaching.  
    */
    function getTeaching() public view returns(address) {
        return teaching;
    }

    /** @dev Get the date of the exam.
    *   @return date of the exam.
    */
    function getDate() public view returns(bytes) {
        return date;
    }

    /** @dev Get the number of students subscribed to the exam.
    *   @return uint number of the students.  
    */
    function getNumberOfStudents() public view returns(uint) {
        return last;
    }

    /** @dev Get the number of marks.
    *   @return uint number of marks.  
    */
    function getNumberOfMarks() public view returns(uint) {
        return insertedMarks;
    }

    /** @dev Get address of a subscribed student.
    *   @param index index of the student.
    *   @return address student contract address.  
    */
    function getStudentSubscribed(uint index) public view returns(address) {
        require(index < last);
        return intToStudent[index];
    }

    /** @dev The student subscribe to the exam.
    *   @param student address of the student contract. 
    */
    function subscribe(address student) public onlyStudentFacade() {
        intToStudent[last] = student;
        studentToInt[student] = last;
        studentToResult[student] = 0;
        last += 1;
    }
}
