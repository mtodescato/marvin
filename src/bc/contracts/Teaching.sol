pragma solidity 0.4.23;


contract Teaching {

    mapping(address => uint) private examToInt;
    mapping(uint => address) private intToExam;
    uint private last = 0;
    address private professor;

    function Teaching(address _professor) public {
        professor = _professor;
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

    modifier onlyReferenceProf (address prof) {
        require(professor == prof);
        _;
    }

    function getTheachingProfessor() public view return(address) {
      return professor;
    }

    modifier onlyCorrectExam (address exam) {
      Exam ex = Exam(exam);
      address exTeaching = ex.getTeaching();
      require(address(this) == exTeaching);
      _;
    }


}
