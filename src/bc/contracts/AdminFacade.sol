pragma solidity 0.4.23;

import "./User.sol";
import "./ListUsers.sol";
import "./FactoryMethod.sol";


contract  AdminFacade {
    ListUsers userList;
    FactoryMethod factory;

    function AdminFacade(address _userlist, address _factory) public {
      userList = ListUsers(_userlist);
      factory = FactoryMethod(_factory);
    }

    function addUser(bytes _name, bytes _surname, bytes _social_number, uint _serial_number, address _owner, uint8  _type) public {
      address newUser = factory.createUser(_name, _surname, _social_number, _serial_number, _owner, _type);
      userList.addUser(newUser, _type, _owner);
    }

    function removeUser(address accountAddress) public {
      userList.removeUser(accountAddress);
    }

}
