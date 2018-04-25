pragma solidity 0.4.19;
import "./User.sol";

contract Student is User {
  function Student(bytes _name, bytes _surname, bytes _socialNumber, uint _serial)
  User(_name, _surname, _socialNumber, _serial)
  {}
}
