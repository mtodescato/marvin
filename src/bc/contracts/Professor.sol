pragma solidity 0.4.23;
import "./User.sol";

contract Professor is User {
  function Professor(bytes _name, bytes _surname, bytes _socialNumber, uint _serial)
  User(_name, _surname, _socialNumber, _serial)
  {}

}
