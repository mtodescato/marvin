pragma solidity 0.4.23;
import "./DomandeLaurea.sol";
import "./ListUsers.sol";
import "./Exam.sol";
import "./Student.sol";
import "./DegreeCourse.sol";


contract StudentFacade {
    DomandeLaurea private listaDomandeLaurea;
    ListUsers private userList;

    modifier onlyReadyStudent(address std) {
        require(checkExam(std));
        _;
    }

    function StudentFacade(address domandaLaurea, address listaU) public {
        listaDomandeLaurea = DomandeLaurea(domandaLaurea);
        userList = ListUsers(listaU);
    }

    function getUserContract() public view returns(address) {
        return userList.getUser(msg.sender);
    }

    function createDegreeRequest(address student, bytes titoloTesi, bytes dataSottomissione, address relatore)
    public
    onlyReadyStudent(student)
    {
        require(userList.getType(relatore) == 1);
        listaDomandeLaurea.inserisciDomanda(student, titoloTesi, dataSottomissione, relatore);
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

    function checkExam(address student) private view returns(bool) {

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
