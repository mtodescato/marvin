pragma solidity 0.4.23;


contract DomandeLaurea {
    mapping(address => DomandaLaurea) private studentContractToDomanda;
    mapping(uint => address) private intToSudent; // solo domande in attesa
    mapping(address => uint) private studentToInt; // solo domande in attesas
    uint private last = 1; // ultimo usato

    struct DomandaLaurea {
        bytes titoloTesi;
        int8 statoDomanda; // in attesa = 0 accettato = 1  o rifiutata = -1
        bytes dataSottomissione;
        address relatoreContract;
    }

    modifier onlyNewDomanda(address studentContract) {
        require(studentToInt[studentContract] == 0);
        _;
    }

    function inserisciDomanda(address studentContract, bytes titoloTesi,
    bytes dataSottomissione, address relatoreContract)
    public
    onlyNewDomanda(studentContract)
    {
        studentContractToDomanda[studentContract] = DomandaLaurea(titoloTesi, 0, dataSottomissione, relatoreContract);
        last += 1;
        studentToInt[studentContract] = last;
        intToSudent[last] = studentContract;
    }

    function gestisciDomanda(int8 newState, uint domanda) public {
        require(newState == -1 || newState == 1);
        require(domanda <= last);
        address stdCont = intToSudent[domanda];
        studentContractToDomanda[stdCont].statoDomanda = newState;
        studentToInt[stdCont] = 0;
        intToSudent[domanda] = intToSudent[last];
        last -= 1;
    }

    function getDomanda(uint domanda) public view returns( bytes, int8, bytes, address) {
        require(domanda <= last);
        address stdCont = intToSudent[domanda];
        DomandaLaurea d = studentContractToDomanda[stdCont];
        return ( d.titoloTesi, d.statoDomanda, d.dataSottomissione, d.relatoreContract );
    }

    function getDomanda(address stdC) public view returns( bytes, int8, bytes, address) {
        require(studentContractToDomanda[stdC].relatoreContract != 0x0);
        DomandaLaurea d = studentContractToDomanda[stdC];
        return ( d.titoloTesi, d.statoDomanda, d.dataSottomissione, d.relatoreContract );
    } 
}
