pragma solidity 0.4.23;


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

    modifier onlyAdmin() {
        require(msg.sender == adminFacade);
        _;
    }

    modifier onlyStudent() {
        require(msg.sender == studentFacade);
        _;
    }

    modifier onlyNewRequest(address studentContract) {
        require(studentToInt[studentContract] == 0);
        _;
    }

    constructor() public {
        adminFacade = msg.sender;
    }

    function changeOwners(address newAdmin, address newStudent) public onlyAdmin() {
        if (newAdmin != address(0) && newStudent != address(0)) {
            adminFacade = newAdmin;
            studentFacade = newStudent;
        }
    }

    function addRequest(address studentContract, bytes thesisTitle, bytes submmissionDate, address professorContract)
    public
    onlyStudent()
    onlyNewRequest(studentContract)
    {
        studentContractToRequest[studentContract] = DegreeRequest(thesisTitle, 0, submmissionDate, professorContract);
        last += 1;
        studentToInt[studentContract] = last;
        intToSudent[last] = studentContract;
    }

    function pendingDegreeRequestNumber() public view returns(uint) {
        return last;
    }

    function manageRequest(int8 newState, uint request) public onlyAdmin() {
        require(newState == -1 || newState == 1);
        require(request < last);
        address stdCont = intToSudent[request];
        studentContractToRequest[stdCont].requestState = newState;
        studentToInt[stdCont] = 0;
        intToSudent[request] = intToSudent[last];
        last -= 1;
    }

    function getDegreeRequestIndex(uint index) public view returns( bytes, int8, bytes, address) {
        require(index < last);
        address stdCont = intToSudent[index];
        DegreeRequest memory request = studentContractToRequest[stdCont];
        return ( request.thesisTitle, request.requestState, request.submmissionDate, request.professorContract);
    }

    function getDegreeRequest(address studentContract) public view returns( bytes, int8, bytes, address) {
        require(studentContractToRequest[studentContract].professorContract != 0x0);
        DegreeRequest memory request = studentContractToRequest[studentContract];
        return ( request.thesisTitle, request.requestState, request.submmissionDate, request.professorContract);
    } 
}
