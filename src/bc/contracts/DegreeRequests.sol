pragma solidity 0.4.23;


/** @title DegreeRequests*/
contract DegreeRequests {
    mapping(address => DegreeRequest) private studentContractToRequest;
    mapping(uint => address) private intToSudent; 
    mapping(address => uint) private studentToInt; 
    uint private last = 0; // first free slot
    address private adminFacade;
    address private studentFacade;

    struct DegreeRequest {
        bytes thesisTitle;
        int8 requestState; // in pending = 0 acceppted = 1  o rejected = -1
        bytes submmissionDate;
        address professorContract;
    }

    /** @dev Check if the the sender is the admin facade.*/
    modifier onlyAdmin() {
        require(msg.sender == adminFacade);
        _;
    }

    /** @dev Check if the the sender is the student facade.*/
    modifier onlyStudent() {
        require(msg.sender == studentFacade);
        _;
    }

    /** @dev Check if the student doesn't have a pending degree request.
    *   @param studentContract address of the student contract. 
    */
    modifier onlyNewRequest(address studentContract) {
        require(studentToInt[studentContract] == 0);
        _;
    }

    /** dev Constructor of admin facade initialize the adminFacade field with msg.sender. */
    constructor() public {
        adminFacade = msg.sender;
    }

    /** @dev Change the two accounts with write permissions on the contract storage.
    *   @param newAdmin address of the new admin.
    *   @param newStudent address of the new student. 
    */
    function changeOwners(address newAdmin, address newStudent) public onlyAdmin() {
        if (newAdmin != address(0) && newStudent != address(0)) {
            adminFacade = newAdmin;
            studentFacade = newStudent;
        }
    }

    /** @dev Add a degree request to the mapping.
    *   @param studentContract address of the student contract creating the degree request.
    *   @param thesisTitle title of the student thesis.
    *   @param submmissionDate date of the subbmission of the degree request.
    *   @param professorContract address of the contract of the professor. 
    */
    function addRequest(address studentContract, bytes thesisTitle, bytes submmissionDate, address professorContract)
    public
    onlyStudent()
    onlyNewRequest(studentContract)
    {
        studentContractToRequest[studentContract] = DegreeRequest(thesisTitle, 0, submmissionDate, professorContract);
        studentToInt[studentContract] = last;
        intToSudent[last] = studentContract;
        last += 1;
    }

    /** @dev return the number of pending requests.
    *   @return uint number of pending requests.
    */
    function pendingDegreeRequestNumber() public view returns(uint) {
        return last;
    }

    /** @dev Change the state of the degree request.
    *   @param newState int8 rapresenting the new state of the request.
    *   @param request index of the degree request. 
    */
    function manageRequest(int8 newState, uint request) public onlyAdmin() {
        require(newState == -1 || newState == 1);
        require(request < last);
        address stdCont = intToSudent[request];
        studentContractToRequest[stdCont].requestState = newState;
        studentToInt[stdCont] = 0;
        intToSudent[request] = intToSudent[last];
        last -= 1;
    }

    /** @dev return the degree request given an index.
    *   @param index uint of the degree request.
    *   @return bytes title of the thesis.
    *   @return int8 state of the degree request.
    *   @return bytes date of submission of the request.
    *   @return address address of the professor contract.
    */
    function getDegreeRequestIndex(uint index) public view returns( bytes, int8, bytes, address) {
        require(index < last);
        address stdCont = intToSudent[index];
        DegreeRequest memory request = studentContractToRequest[stdCont];
        return ( request.thesisTitle, request.requestState, request.submmissionDate, request.professorContract);
    }

    /** @dev return the degree request given a student address.
    *   @param studentContract address of the student of the degree request.
    *   @return bytes title of the thesis.
    *   @return int8 state of the degree request.
    *   @return bytes date of submission of the request.
    *   @return address address of the professor contract.
    */
    function getDegreeRequest(address studentContract) public view returns( bytes, int8, bytes, address) {
        require(studentContractToRequest[studentContract].professorContract != 0x0);
        DegreeRequest memory request = studentContractToRequest[studentContract];
        return ( request.thesisTitle, request.requestState, request.submmissionDate, request.professorContract);
    } 
}
