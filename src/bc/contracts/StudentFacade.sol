pragma solidity 0.4.23;
import "./DomandeLaurea.sol";
import "./ListUsers.sol";


contract StudentFacade {
    DomandeLaurea private listaDomandeLaurea;
    ListUsers private listaUtenti;

    function StudentFacade(address domandaLaurea, address listaU) public {
        listaDomandeLaurea = DomandeLaurea(domandaLaurea);
        listaUtenti = ListUsers(listaU);
    }

    function creaDomandaLaurea(bytes titoloTesi, bytes dataSottomissione, address relatoreContract) public {
        require(listaUtenti.getType(relatoreContract) == 1);
        address stdC = listaUtenti.getUser(msg.sender);
        listaDomandeLaurea.inserisciDomanda(stdC, titoloTesi, dataSottomissione, relatoreContract);
    }
}
