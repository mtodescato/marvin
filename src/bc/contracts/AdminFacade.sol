pragma solidity 0.4.23;

import "./User.sol";
import "./ListUsers.sol";
import "./FactoryMethod.sol";
import "./DomandeLaurea.sol";


contract  AdminFacade {
    ListUsers private userList;
    FactoryMethod private factory;
    DomandeLaurea private domandeLaurea;

    function AdminFacade(address _userlist, address _factory, address _domande) public {
        userList = ListUsers(_userlist);
        factory = FactoryMethod(_factory);
        domandeLaurea = DomandeLaurea(_domande);
    }

    function addUser(bytes _name, bytes _surname, bytes _socialNumber, uint _serialNumber, address _owner, uint8  _type)
    public {
        address newUser = factory.createUser(_name, _surname, _socialNumber, _serialNumber, _owner, _type);
        userList.addUser(newUser, _type, _owner);
    }

    function removeUser(address accountAddress) public {
        userList.removeUser(accountAddress);
    }

    function gestisciDomandaLaurea(int8 newState, uint domanda) public {
        domandeLaurea.gestisciDomanda(newState, domanda);
    }

}
