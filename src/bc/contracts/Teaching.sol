pragma solidity 0.4.23;
import "./Exam.sol";
import "./Ownable.sol";


/** @title Teaching */
contract Teaching is Ownable {

    mapping(address => uint) private examToInt;
    mapping(uint => address) private intToExam;
    uint private last = 0;
    address private professor;
    bytes private name;
    
    /** @dev Check if the transaction sender is the refernce professor.
    *   @param professor address of the professor contract.
    */
    modifier onlyReferenceProf (address prof) {
        require(professor == prof);
        _;
    }
    
    /** @dev Check if the exam is for the Teaching.
    *   @param exam address of the exam contract.
    */
    modifier onlyCorrectExam (address exam) {
        Exam ex = Exam(exam);
        address exTeaching = ex.getTeaching();
        require(address(this) == exTeaching);
        _;
    }

    /** @dev Consturctor of teaching
    *   @param _professor address of the professor.
    *   @param _name name of the teaching.
    */
    constructor(address _professor, bytes _name) public {
        professor = _professor;
        name = _name;
    }

    /** @dev Add an exam to the mapping.
    *   @param exam address of the exam.
    *   @param sender address of the professor sending the transaction. 
    */
    function addExam(address exam, address sender)
    public
    onlyOwner()
    onlyReferenceProf(sender)
    onlyCorrectExam(exam)
    {
        examToInt[exam] = last;
        intToExam[last] = exam;
        last += 1;
    }

    /** @dev Get an exam given an index.
    *   @param index index of the exam.
    *   @return address exam address. 
    */
    function getExam(uint index) public view returns(address) {
        require(index < last);
        return intToExam[index];
    }

    /** @dev Get refernce professor.
    *   @return address refernce professor address. 
    */
    function getReferenceProfessor() public view returns(address) {
        return professor;
    }

    /** @dev Get teaching name
    *   @return byte name of the teaching.
    */
    function getName() public view returns(bytes) {
        return name;
    }
}
