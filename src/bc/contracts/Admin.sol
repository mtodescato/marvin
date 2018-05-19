pragma solidity 0.4.23;
import "./User.sol";


contract Admin is User {
    constructor(bytes _name, bytes _surname, bytes _socialNumber, uint _serial)
    public
    User(_name, _surname, _socialNumber, _serial) {}
}
