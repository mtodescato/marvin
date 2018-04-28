pragma solidity 0.4.23;
import "./User.sol";


contract Student is User {
    function Student(bytes _name, bytes _surname, bytes _socialNumber, uint _serial)
    public
    User(_name, _surname, _socialNumber, _serial)
    {}

    mapping(address => address) private teachingToExam; //solo se l'esame e' passato
}
