pragma solidity 0.4.23;


contract Teaching {
    
    mapping(address => uint) private examToInt;
    mapping(uint => address) private intToExam;
    uint private last = 0;
    bytes private professor;
    
    function Teaching(bytes _professor) public {
        professor = _professor;
    }

    function addExam(address exam) public {
        examToInt[exam] = last;
        intToExam[last] = exam;
        last += 1;
    }

    function getExam(uint index) public view returns(address) {
        require(index < last);
        return intToExam[index];
    }

}
