pragma solidity 0.4.23;
import "./DomandeLaurea.sol";
import "./ListUsers.sol";


contract StudentFacade {
  DomandeLaurea private listaDomandeLaurea;
  ListUsers private ListaUtenti;


  function StudentFacade(address domandaLaurea, address listaU) public {
    listaDomandeLaurea = DomandeLaurea(domandaLaurea);
    ListaUtenti = ListUsers(listaU);
  }

  function creaDomandaLaurea(bytes titoloTesi, bytes dataSottomissione, address relatoreContract) public {
    require(ListaUtenti.getType(relatoreContract) == 1);
    address stdC = ListaUtenti.getUser(msg.sender);
    listaDomandeLaurea.inserisciDomanda(stdC, titoloTesi, dataSottomissione, relatoreContract);
  }
}
