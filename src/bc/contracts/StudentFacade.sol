pragma solidity 0.4.23;
import "./DomandeLaurea.sol";
import "./ListUsers.sol";
import "./Exam.sol";
import "./Student.sol";


contract StudentFacade {
    DomandeLaurea private listaDomandeLaurea;
    ListUsers private userList;

    function getUserContract() public view returns(address) {
        return userList.getUser(msg.sender);
    }

    function StudentFacade(address domandaLaurea, address listaU) public {
        listaDomandeLaurea = DomandeLaurea(domandaLaurea);
        userList = ListUsers(listaU);
    }

    function creaDomandaLaurea(address student, bytes titoloTesi, bytes dataSottomissione, address relatore) public {
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
            std.insertPassedExam(ex.teaching, exam);

        }
    }
}
