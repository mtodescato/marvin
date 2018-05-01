pragma solidity 0.4.23;


contract DegreeRequests {
    mapping(address => DegreeRequest) private studentContractToRequest;
    mapping(uint => address) private intToSudent; // solo domande in attesa
    mapping(address => uint) private studentToInt; // solo domande in attesas
    uint private last = 1; // ultimo usato

    struct DegreeRequest {
        bytes thesisTitle;
        int8 requestState; // in attesa = 0 accettato = 1  o rifiutata = -1
        bytes submmissionDate;
        address professorContract;
    }

    modifier onlyNewRequest(address studentContract) {
        require(studentToInt[studentContract] == 0);
        _;
    }

    function addRequest(address studentContract, bytes thesisTitle, bytes submmissionDate, address professorContract)
    public
    onlyNewRequest(studentContract)
    {
        studentContractToRequest[studentContract] = DegreeRequest(thesisTitle, 0, submmissionDate, professorContract);
        last += 1;
        studentToInt[studentContract] = last;
        intToSudent[last] = studentContract;
    }

    function manageRequest(int8 newState, uint request) public {
        require(newState == -1 || newState == 1);
        require(request <= last);
        address stdCont = intToSudent[request];
        studentContractToRequest[stdCont].requestState = newState;
        studentToInt[stdCont] = 0;
        intToSudent[request] = intToSudent[last];
        last -= 1;
    }

    function getDegreeRequest(uint index) public view returns( bytes, int8, bytes, address) {
        require(index <= last);
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
