pragma solidity 0.4.23;
import "./Exam.sol";


contract Teaching {

    mapping(address => uint) private examToInt;
    mapping(uint => address) private intToExam;
    uint private last = 0;
    address private professor;
    bytes private name;

    function Teaching(address _professor, bytes _name) public {
        professor = _professor;
        name = _name;
    }

    function addExam(address exam, address sender)
    public
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

    modifier onlyReferenceProf (address prof) {
        require(professor == prof);
        _;
    }

    function getTheachingProfessor() public view returns(address) {
        return professor;
    }

    modifier onlyCorrectExam (address exam) {
        Exam ex = Exam(exam);
        address exTeaching = ex.getTeaching();
        require(address(this) == exTeaching);
        _;
    }


}
