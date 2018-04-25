pragma solidity 0.4.23;

import "./User.sol";
import "./Ownable.sol";

contract ListUsers is Ownable {

    struct UserInfo {
      address cAddress;
      uint8 userType;
      uint intPosition;
    }

    mapping(address => UserInfo) private UAddressToUserInfo;
    mapping(uint => address) private IntToUAddress;
    uint last = 0; //il primo disponibile

    function addUser(address _usrAddress, uint8 _type, address _userAccount)
      public
      // onlyOwner
      // onlyNewUser
      // onlyValidUser
    {
      require(UAddressToUserInfo[_userAccount].cAddress == address(0));
      IntToUAddress[last] = _userAccount;
      UAddressToUserInfo[_userAccount] = UserInfo(_usrAddress, _type, last);
      last += 1;
    }

    function getUser(uint userN) public view returns( address ) {
      require ( IntToUAddress[userN] != 0x0);
      return UAddressToUserInfo[IntToUAddress[userN]].cAddress;
    }

    function removeUser(address uAddress) public {
      require(UAddressToUserInfo[uAddress].cAddress != address(0));
      uint pos = UAddressToUserInfo[uAddress].intPosition;
      delete UAddressToUserInfo[uAddress];
      IntToUAddress[pos] = IntToUAddress[last-1];
      UAddressToUserInfo[IntToUAddress[pos]].intPosition = pos;
      last -= 1;
    }
}
