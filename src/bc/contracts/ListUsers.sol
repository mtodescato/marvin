pragma solidity 0.4.23;
import "./User.sol";
import "./Ownable.sol";
import "./Admin.sol";


contract ListUsers is Ownable {
    address private masterAdmin;

    struct UserInfo {
        address cAddress;
        uint8 userType; // student 0, professore 1, universita 2
        uint intPosition;
    }

    mapping(address => UserInfo) private uAddressToUserInfo;
    mapping(uint => address) private intToUAddress;
    uint private last = 0; //first free slot

    modifier onlyNewUser(address student) {
        require(uAddressToUserInfo[student].cAddress == 0x0);
        _;
    }

    modifier onlyValidUser(address student) {
        require(student != 0x0);
        _;
    }

    constructor() public {
        masterAdmin = msg.sender;
    }

    function getMasterAdminAddress() public view returns(address) {
        return masterAdmin;
    }

    function addUser(address _usrAddress, uint8 _type, address _userAccount)
    public
    onlyOwner()
    onlyNewUser(_usrAddress)
    onlyValidUser(_usrAddress)
    {
        require(uAddressToUserInfo[_userAccount].cAddress == address(0));
        intToUAddress[last] = _userAccount;
        uAddressToUserInfo[_userAccount] = UserInfo(_usrAddress, _type, last);
        last += 1;
    }

    function getUserInt(uint userN) public view returns( address ) {
        require(uAddressToUserInfo[intToUAddress[userN]].cAddress != 0x0);
        return uAddressToUserInfo[intToUAddress[userN]].cAddress;
    }
    
    function getUserAddress(uint userN) public view returns( address ) {
        require(intToUAddress[userN] != 0x0);
        return intToUAddress[userN];
    }

    function getUser(address userAdd) public view returns( address ) {
        require(uAddressToUserInfo[userAdd].cAddress != 0x0);
        return uAddressToUserInfo[userAdd].cAddress;
    }

    function getNumberOfUsers() public view returns(uint) {
        return last;
    }

    function getType(address userAdd) public view returns( uint8 ) {
        require(uAddressToUserInfo[userAdd].cAddress != 0x0);
        return uAddressToUserInfo[userAdd].userType;
    }

    function removeUser(address uAddress) public onlyOwner {
        require(uAddressToUserInfo[uAddress].cAddress != address(0));
        uint pos = uAddressToUserInfo[uAddress].intPosition;
        //delete uAddressToUserInfo[uAddress];
        uAddressToUserInfo[uAddress].cAddress = 0x0;
        uAddressToUserInfo[uAddress].userType = 3;
        //uAddressToUserInfo[uAddress].intPosition = 0;
        intToUAddress[pos] = intToUAddress[last-1];
        uAddressToUserInfo[intToUAddress[pos]].intPosition = pos;
        last -= 1;
    }
}
