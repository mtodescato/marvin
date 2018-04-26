pragma solidity 0.4.23;

contract DomandeLaurea {
  mapping(address => DomandaLaurea) private StudentContractToDomanda;
  mapping(uint => address) private IntToSudent; // solo domande in attesa
  mapping(address => uint) private StudentToInt; // solo domande in attesas
  uint private last = 1; // ultimo usato

  struct DomandaLaurea {
    bytes titoloTesi;
    int8 statoDomanda; // in attesa = 0 accettato = 1  o rifiutata = -1
    bytes dataSottomissione;
    address relatoreContract;
  }

  modifier onlyNewDomanda(address studentContract) {
    require( StudentToInt[studentContract] == 0 );
    _;
  }

  function inserisciDomanda(address studentContract, bytes titoloTesi, bytes dataSottomissione, address relatoreContract)
    onlyNewDomanda(studentContract)
    public
    {
      StudentContractToDomanda[studentContract] = DomandaLaurea(titoloTesi, 0, dataSottomissione, relatoreContract);
      last += 1;
      StudentToInt[studentContract] = last;
      IntToSudent[last] = studentContract;
    }

  function gestisciDomanda(int8 newState, uint domanda) public {
    require( newState == -1 || newState == 1 );
    require( domanda <= last);
    address stdCont = IntToSudent[domanda];
    StudentContractToDomanda[stdCont].statoDomanda = newState;
    StudentToInt[stdCont] = 0;
    IntToSudent[domanda] = IntToSudent[last];
    last -= 1;
  }

  function getDomanda(uint domanda) public returns( bytes, int8, bytes, address) {
    require (domanda <= last);
    address stdCont = IntToSudent[domanda];
    DomandaLaurea d = StudentContractToDomanda[stdCont];
    return ( d.titoloTesi, d.statoDomanda, d.dataSottomissione, d.relatoreContract );
  }

  function getDomanda(address stdC) public returns( bytes, int8, bytes, address) {
    require( StudentContractToDomanda[stdC].relatoreContract != 0x0);
    DomandaLaurea d = StudentContractToDomanda[stdC];
    return ( d.titoloTesi, d.statoDomanda, d.dataSottomissione, d.relatoreContract );
  }



}
