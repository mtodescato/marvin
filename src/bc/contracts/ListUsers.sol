pragma solidity 0.4.23;
import "./User.sol";
import "./Ownable.sol";
import "./Admin.sol";


/** @title ListUsers*/
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

    /** @dev Checks if the student address is not already present in the mapping.
    *   @param student address of the student wallet.
    */
    modifier onlyNewUser(address student) {
        require(uAddressToUserInfo[student].cAddress == 0x0);
        _;
    }

    /** @dev Checks if the student address is valid.
    *   @param student address of the student.
    */
    modifier onlyValidUser(address student) {
        require(student != 0x0);
        _;
    }

    /** @dev constuctor of usersList */
    constructor() public {
        masterAdmin = msg.sender;
    }

    /** @dev Return the address of the defualt admin.
    *   @return address master admin address.
    */
    function getMasterAdminAddress() public view returns(address) {
        return masterAdmin;
    }

    /** @dev Add a user to the mapping.
    *   @param _usrAddress address of the user contract.
    *   @param _type type of the user.
    *   @param _userAccount address of the user wallet.
    */
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

    /** @dev get the user contract address.
    *   @param userN index of the user.
    *   @return address user contract address.
    */
    function getUserInt(uint userN) public view returns( address ) {
        require(uAddressToUserInfo[intToUAddress[userN]].cAddress != 0x0);
        return uAddressToUserInfo[intToUAddress[userN]].cAddress;
    }
    
    /** @dev get user wallet address.
    *   @param userN index of the user.
    *   @return address user wallet address.
    */
    function getUserAddress(uint userN) public view returns( address ) {
        require(intToUAddress[userN] != 0x0);
        return intToUAddress[userN];
    }

    /** @dev get user contract address.
    *   @param userAdd address of the user.
    *   @return address user contract address.
    */
    function getUser(address userAdd) public view returns( address ) {
        require(uAddressToUserInfo[userAdd].cAddress != 0x0);
        return uAddressToUserInfo[userAdd].cAddress;
    }

    /** @dev return the number of users.
    *   @return uint number of users.
    */
    function getNumberOfUsers() public view returns(uint) {
        return last;
    }

    /** @dev return the type of the user.
    *   @param userAdd address of the user contract.
    *   @return uint8 type of the user.
    */
    function getType(address userAdd) public view returns( uint8 ) {
        require(uAddressToUserInfo[userAdd].cAddress != 0x0);
        return uAddressToUserInfo[userAdd].userType;
    }

    /** @dev Remove an user from the mapping.
    *   @param uAddress user address.
    */
    function removeUser(address uAddress) public onlyOwner {
        require(uAddressToUserInfo[uAddress].cAddress != address(0));
        uint pos = uAddressToUserInfo[uAddress].intPosition;
        uAddressToUserInfo[uAddress].cAddress = 0x0;
        uAddressToUserInfo[uAddress].userType = 3;
        intToUAddress[pos] = intToUAddress[last-1];
        uAddressToUserInfo[intToUAddress[pos]].intPosition = pos;
        last -= 1;
    }
}
