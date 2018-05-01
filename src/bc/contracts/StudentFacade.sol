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

    /**@dev Constructor of SudentFacade.
    *  @param degreeRequestsAddress Address of degreeRequest contract containig the degree requests.
    *  @param userListAddress Address ot LisrUser contract containig users.
    */
    function StudentFacade(address degreeRequestsAddress, address userListAddress) public {
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
    onlyReadyStudent(student)
    {
        require(userList.getType(professor) == 1);
        degreeRequests.addRequest(student, thesisTitle, submissionDate, professor);
    }

    /**@dev Subscribe a student to an exam.
    *  @param student Address of the student contract.
    *  @param exam Address of the exam.
    */
    function subscribeToExam(address student, address exam) public {
        Exam ex = Exam(exam);
        ex.subscribe(student);
    }

    /**@dev Manage a vote for un exam with the option to accept o reject it.
    *  @param student Address of the student contract.
    *  @param exam Address of the exam contract.
    *  @param mark accept or reject vote, 1 for accapted and 0 for reject.
    */
    function manageVote(address student, address exam, bool mark) public {
        Exam ex = Exam(exam);
        ex.manageVote(student, mark);
        if (mark) {
            Student std = Student(student);
            std.insertPassedExam(ex.getTeaching(), exam);

        }
    }

    /**@dev Check if a student has passed exams far all his teachings.
    *  @param student Address of the student contract.
    */
    function checkExams(address student) private view returns(bool) {

        Student std = Student(student);
        address degreeA = std.getDegreeCourse();
        DegreeCourse degree = DegreeCourse(degreeA);

        uint n = degree.getNumberOfTeaching();
        bool ok = true;


        for (uint i=0; i < n && ok; i++) {
            address t = degree.getTeaching(i);
            ok = std.checkPassedTeaching(t);
        }

        return ok;
    }
}
