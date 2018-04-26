pragma solidity 0.4.23;
import "./User.sol";
import "./Ownable.sol";


contract ListUsers is Ownable {

    struct UserInfo {
        address cAddress;
        uint8 userType; // student 0, professore 1, universita 2
        uint intPosition;
    }

    mapping(address => UserInfo) private uAddressToUserInfo;
    mapping(uint => address) private intToUAddress;
    uint private last = 0; //il primo disponibile

    function addUser(address _usrAddress, uint8 _type, address _userAccount)
    public
      // onlyOwner
      // onlyNewUser
      // onlyValidUser
    {
        require(uAddressToUserInfo[_userAccount].cAddress == address(0));
        intToUAddress[last] = _userAccount;
        uAddressToUserInfo[_userAccount] = UserInfo(_usrAddress, _type, last);
        last += 1;
    }

    function getUser(uint userN) public view returns( address ) {
        require(intToUAddress[userN] != 0x0);
        return uAddressToUserInfo[intToUAddress[userN]].cAddress;
    }

    function getUser(address userAdd) public view returns( address ) {
        require(uAddressToUserInfo[userAdd].cAddress != 0x0);
        return uAddressToUserInfo[userAdd].cAddress;
    }

    function getType(address userAdd) public view returns( uint8 ) {
        require(uAddressToUserInfo[userAdd].cAddress != 0x0);
        return uAddressToUserInfo[userAdd].userType;
    }

    function removeUser(address uAddress) public {
        require(uAddressToUserInfo[uAddress].cAddress != address(0));
        uint pos = uAddressToUserInfo[uAddress].intPosition;
        delete uAddressToUserInfo[uAddress];
        intToUAddress[pos] = intToUAddress[last-1];
        uAddressToUserInfo[intToUAddress[pos]].intPosition = pos;
        last -= 1;
    }
}
