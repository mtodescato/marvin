pragma solidity 0.4.19;


contract Ownable {
    address public owner;

    function Ownable() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function transfertOwnernship (address newOwner) public onlyOwner {
        if (newOwner != address(0))
            owner = newOwner;
    }
}
