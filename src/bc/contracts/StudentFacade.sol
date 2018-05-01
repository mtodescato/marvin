pragma solidity 0.4.23;
import "./DegreeRequest.sol";
import "./ListUsers.sol";
import "./Exam.sol";
import "./Student.sol";
import "./DegreeCourse.sol";


contract StudentFacade {
    DomandeLaurea private degreeRequests;
    ListUsers private userList;

    modifier onlyReadyStudent(address student) {
        require(checkExams(student));
        _;
    }

    function StudentFacade(address degreeRequestsAddess, address userListAddress) public {
        degreeRequests = DegreeRequests(degreeRequestsAddess);
        userList = ListUsers(userListAddress);
    }

    function getUserContract() public view returns(address) {
        return userList.getUser(msg.sender);
    }

    function createDegreeRequest(address student, bytes thesisTitle, bytes submissionDate, address professor)
    public
    onlyReadyStudent(student)
    {
        require(userList.getType(professor) == 1);
        listaDomandeLaurea.inserisciDomanda(student, thesisTitle, submissionDate, professor);
    }

    function subscribeToExam(address student, address exam) public {
        Exam ex = Exam(exam);
        ex.subscribe(student);
    }

    function manageVote(address student, address exam, bool mark) public {
        Exam ex = Exam(exam);
        ex.manageVote(student, mark);
        if (mark) {
            Student std = Student(student);
            std.insertPassedExam(ex.getTeaching(), exam);

        }
    }

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
