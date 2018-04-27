pragma solidity 0.4.23;


contract AccademicYear {
    
    mapping(uint => address) private intToCdL;
    mapping(address => uint) private cdLToInt;
    uint private last = 0;
    
    function AccademicYear() public {}

    function addCdL(address cdL) public {
        cdLToInt[cdL] = last;
        intToCdL[last] = cdL;
        last += 1;
    }

}
