pragma solidity 0.4.23;
import "DomandaLaurea.sol";
import "ListUsers.sol";


contract StudentFacade {
  DomandaLaurea private DomandeLaurea;
  ListUsers private ListaUtenti;


  function StudentFacade(address domandaLaurea, address listaU) public {
    DomandeLaurea = DomandaLaurea(domandaLaurea);
    ListaUtenti = ListUsers(listaU);
  }



  function creaDomandaLaurea(bytes titoloTesi, bytes dataSottomissione, address relatoreContract) public returns() {
    require(ListaUtenti.getType(relatoreContract) == 1);
    address stdC = ListaUtenti.getUser(msg.sender);
    DomandaLaurea.inserisciDomanda(stdC, dataSottomissione, relatoreContract);
  }
}
