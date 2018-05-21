pragma solidity 0.4.23;
import "./Ownable.sol";


/** @title User 
*   @dev User is the base class for all'the users: Student, Professor and Admin
*/
contract User is Ownable {
    bytes private name;
    bytes private surname;
    bytes private socialNumber;
    uint private serial;

    /** @dev Constructor of User
    *   @param _name user name
    *   @param _surname user surname
    *   @param _socialNumber user social number
    *   @param _serial user indentifier inside the university
    */
    constructor( bytes _name, bytes _surname, bytes _socialNumber, uint _serial) public {
        name = _name;
        surname = _surname;
        socialNumber = _socialNumber;
        serial = _serial;
    }

    /** @dev get for user name
    *   @return bytes the string of the name
    */
    function getName() public  view returns(bytes) {
        return name;
    }

    /** @dev get for user surname
    *   @return bytes the string of the surname
    */
    function getSurname() public view returns(bytes) {
        return surname;
    }

    /** @dev get for user social number
    *   @return bytes the string of the social number
    */
    function getSocialNumber() public view returns(bytes) {
        return socialNumber;
    }

    /** @dev get for user serial
    *   @return uint the string of the serial
    */
    function getSerial() public view returns(uint) {
        return serial;
    }

}
