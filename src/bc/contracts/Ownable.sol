pragma solidity 0.4.23;


contract Ownable {
    address private owner;

    function Ownable() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function getOwner() public view returns(address) {
        return owner;
    }

    function transfertOwnernship (address newOwner) public onlyOwner {
        if (newOwner != address(0))
            owner = newOwner;
    }
}
