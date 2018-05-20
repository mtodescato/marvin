pragma solidity 0.4.23;
import "./User.sol";


/** @title Admin*/
contract Admin is User {

    /** @dev Constructor of Admin
    *   @param _name user name
    *   @param _surname user surname
    *   @param _socialNumber user social number
    *   @param _serial user indentifier inside the university
    */
    constructor(bytes _name, bytes _surname, bytes _socialNumber, uint _serial)
    public
    User(_name, _surname, _socialNumber, _serial) {}
}
