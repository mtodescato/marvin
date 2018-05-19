pragma solidity 0.4.23;
import "./DegreeRequests.sol";
import "./ListUsers.sol";
import "./Exam.sol";
import "./Student.sol";
import "./DegreeCourse.sol";


/** @title Student facade */
contract StudentFacade {
    DegreeRequests private degreeRequests;
    ListUsers private userList;

    /**@dev check if a student have passed all the Teachings of his degree course.
    *  @param student Address of the contract of the student that will get checked for all exams. 
    */
    modifier onlyReadyStudent(address student) {
        require(checkExams(student));
        _;
    }

    /**@dev Check if the user requesting an action involving a contract is the owner of the contract.
    *  @param contractA Aderess of the contract involved in the operation.
    */
    modifier studentUseHisContract(address contractA) {
        require(msg.sender == (Student(contractA)).getOwner()); 
        _;
    }

    /**@dev Constructor of SudentFacade.
    *  @param degreeRequestsAddress Address of degreeRequest contract containig the degree requests.
    *  @param userListAddress Address ot LisrUser contract containig users.
    */
    constructor(address degreeRequestsAddress, address userListAddress) public {
        degreeRequests = DegreeRequests(degreeRequestsAddress);
        userList = ListUsers(userListAddress);
    }

    /**@dev retuns the contract owned by the user calling the fuction.*/
    function getUserContract() public view returns(address) {
        return userList.getUser(msg.sender);
    }

    /**@dev create a new degree request for a student
    *  @param student Address of the student requesting to start the degree process.
    *  @param thesisTitle It is the title of the thesis.
    *  @param submissionDate Date when request is sent.
    *  @param professor Address of the professor validating the student thesis.
    */
    function createDegreeRequest(address student, bytes thesisTitle, bytes submissionDate, address professor)
    public
    studentUseHisContract(student)
    onlyReadyStudent(student)
    {
        require(userList.getType(professor) == 1);
        degreeRequests.addRequest(student, thesisTitle, submissionDate, professor);
    }

    /**@dev Subscribe a student to an exam.
    *  @param student Address of the student contract.
    *  @param exam Address of the exam.
    */
    function subscribeToExam(address student, address exam) public studentUseHisContract(student) {
        Exam ex = Exam(exam);
        ex.subscribe(student);
    }

    /**@dev Manage a vote for un exam with the option to accept o reject it.
    *  @param student Address of the student contract.
    *  @param exam Address of the exam contract.
    *  @param mark accept or reject vote, 1 for accapted and 0 for reject.
    */
    function manageMark(address student, address exam, bool mark) public studentUseHisContract(student) {
        Exam ex = Exam(exam);
        ex.manageMark(student, mark);
        Student std = Student(student);
        std.insertPassedExam(ex.getTeaching(), exam, mark);
    }

    /**@dev Get the number of techings passed by the student.
    *  @param student Address of the student.
    *  @return uint The number of exams passed by the student.
    */
    function getNumberOfTeachings(address student) public view returns(uint) {
        Student studentC = Student(student);
        return studentC.getNumberOfTeachings();
    }

    /**@dev Get the teaching corrisponding to the index in the student contract.
    *  @param index Index of the teaching.
    *  @param student Address of the student contract.
    *  @return address The address of the teaching indetified by the index.
    */
    function getTeaching(uint index, address student) public view returns(address) {
        Student studentC = Student(student);
        return studentC.getTeaching(index);
    }

    /**@dev Given a theaching return the exam who passed the teaching.
    *  @param teaching Address of the teaching.
    *  @param student Address of the student contract.
    *  @return address Address of the exam contract.  
    */
    function getExam(address teaching, address student) public view returns(address) {
        Student studentC = Student(student);
        return studentC.getExam(teaching);
    }

    function setDegreeCourse(address degreeC, address student) 
    public
    studentUseHisContract(student)
    {
        Student studentC = Student(student);
        studentC.setDegreeCourse(degreeC);
    }

    /**@dev Check if a student has passed exams far all his teachings.
    *  @param student Address of the student contract.
    */
    function checkExams(address student) private view returns(bool) {

        Student std = Student(student);
        address degreeA = std.getDegreeCourse();
        DegreeCourse degree = DegreeCourse(degreeA);

        uint n = degree.getNumberOfTeachings();
        bool ok = true;

        
        for (uint i=0; i < n && ok; i++) {
            address t = degree.getTeaching(i);
            ok = std.checkPassedTeaching(t);
        }
        
        return ok;
    }
}