pragma solidity 0.4.23;
import "./Exam.sol";
import "./Ownable.sol";


contract Teaching is Ownable {

    mapping(address => uint) private examToInt;
    mapping(uint => address) private intToExam;
    uint private last = 0;
    address private professor;
    bytes private name;
    
    modifier onlyReferenceProf (address prof) {
        require(professor == prof);
        _;
    }
    
    modifier onlyCorrectExam (address exam) {
        Exam ex = Exam(exam);
        address exTeaching = ex.getTeaching();
        require(address(this) == exTeaching);
        _;
    }

    constructor(address _professor, bytes _name) public {
        professor = _professor;
        name = _name;
    }

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

    function getExam(uint index) public view returns(address) {
        require(index < last);
        return intToExam[index];
    }

    function getReferenceProfessor() public view returns(address) {
        return professor;
    }

    function getName() public view returns(bytes) {
        return name;
    }
}
