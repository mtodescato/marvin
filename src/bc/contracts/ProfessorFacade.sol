pragma solidity 0.4.23;
import "./Teaching.sol";
import "./Professor.sol";
import "./Exam.sol";


/** @title Professor facade */
contract  ProfessorFacade {

    /**@dev Check if the user requesting an action involving a contract is the owner of the contract.
    *  @param contractA Address of the contract involved in the operation.
    */
    modifier professorUseHisContract(address contractA) {
        require(msg.sender == (Professor(contractA)).getOwner()); 
        _;
    }

    /** @dev Create and insert a new exam for a given teaching.
    *   @param teaching Address of the teaching. 
    *   @param date Date of the exam.
    *   @param professor Address of contract of the professor creating the exam. 
    */
    function insertExam(address teaching, bytes date, address professor, address studentFacade) 
    public  
    professorUseHisContract(professor)
    {
        Exam newExam = new Exam(teaching, date, studentFacade);
        Teaching teach = Teaching(teaching);
        teach.addExam(address(newExam), professor);
    }
    
    /** @dev Publish a mark for an exam.
    *   @param exam Address of the exam.
    *   @param student Address of the student contract.
    *   @param mark Result of the exam.
    *   @param sender Address of the contract of the professor inserting the mark.
    */
    function publishMark(address exam, address student, uint8 mark, address sender)
    public 
    professorUseHisContract(sender)
    {
        Exam ex = Exam(exam);
        ex.setMark(student, mark, sender);
    }

}
