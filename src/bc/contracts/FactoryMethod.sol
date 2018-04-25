pragma solidity 0.4.23;

import "./User.sol";
import "./Professor.sol";
import "./Student.sol";
import "./Admin.sol";
import "./Ownable.sol";



contract FactoryMethod {
    modifier validUserType(uint8 _type) {
      require (_type<=2);
      _;
    }

    function createUser (bytes _name, bytes _surname, bytes _socialNumber, uint _serial, address owner, uint8 _type)
      public
      validUserType(_type)
      returns(address)
      {
        User newUser;
        if (_type ==0) {
            newUser = new Professor(_name, _surname, _socialNumber, _serial);
        }
        if (_type ==1) {
            newUser = new Student(_name, _surname, _socialNumber, _serial);
        }
        if (_type ==2) {
            newUser = new Admin(_name, _surname, _socialNumber, _serial);
        }
        newUser.transfertOwnernship(owner);
        return address(newUser);
    }
}
