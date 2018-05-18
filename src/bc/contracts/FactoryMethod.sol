pragma solidity 0.4.23;
import "./User.sol";
import "./Professor.sol";
import "./Student.sol";
import "./Admin.sol";


contract FactoryMethod {

    address studentFacade;

    modifier validUserType(uint8 _type) {
        require(_type <= 2);
        _;
    }

    constructor(address _studentFacade) public {
        studentFacade = _studentFacade;
    }

    function createUser (bytes _name, bytes _surname, bytes _socialNumber, uint _serial, address owner, uint8 _type)
    public
    validUserType(_type)
    returns(address)
    {
        User newUser;
        if (_type == 0) {
            newUser = new Student(_name, _surname, _socialNumber, _serial, studentFacade);
        }
        if (_type == 1) {
            newUser = new Professor(_name, _surname, _socialNumber, _serial);
        }
        if (_type == 2) {
            newUser = new Admin(_name, _surname, _socialNumber, _serial);
        }
        newUser.transfertOwnernship(owner);
        return address(newUser);
    }
}
