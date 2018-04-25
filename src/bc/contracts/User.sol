pragma solidity 0.4.19;

import "./Ownable.sol";

contract User is Ownable {
  bytes private name;
  bytes private surname;
  bytes private socialNumber;
  uint private serial; //matricola

  function User( bytes _name, bytes _surname, bytes _socialNumber, uint _serial) public {
    name = _name;
    surname = _surname;
    socialNumber = _socialNumber;
    serial = _serial;
  }

  function getName() view returns(bytes) {
    return name;
  }

  function getSurname() view returns(bytes) {
    return surname;
  }

  function getSocialNumber() view returns(bytes) {
    return socialNumber;
  }

  function getSerial() view returns(uint) {
    return serial;
  }

}
