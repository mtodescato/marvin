pragma solidity 0.4.23;
import "./Teaching.sol";
import "./Professor.sol";
import "./Exam.sol";


contract  ProfessorFacade {


    function insertExam(address teaching, bytes date, address professor) public {
        Exam newExam = new Exam(date, teaching);
        Teaching teach = Teaching(teaching);
        teach.addExam(address(newExam), professor);
    }

    function publishMark(address exam, address student, uint8 mark, address sender) public {
        Exam ex = Exam(exam);
        ex.setMark(student, mark, sender);
    }

}
