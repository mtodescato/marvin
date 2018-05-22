pragma solidity 0.4.23;
import "./User.sol";

/** @title Student */
contract Student is User {

    address private degreeCourse;
    mapping(address => address) private teachingToExam; //solo se l'esame e' accettato
    mapping(uint => address) private intToTeaching;
    uint private last = 0;
    address private studentFacade;
    
    /** @dev Check if the transaction is requested by the user or the student facade*/
    modifier isOwnerOrFacade() {
        if ((msg.sender != this.getOwner()) && (msg.sender != studentFacade)) revert();
        _;
    }

    /** @dev Constructor of student */
    constructor(bytes _name, bytes _surname, bytes _socialNumber, uint _serial, address _studentFacade)
    public
    User(_name, _surname, _socialNumber, _serial) {
        studentFacade = _studentFacade;
    }

    /** @dev Accept or reject a mark and insert it in the booklet.
    *   @param teaching address of the teaching.
    *   @param exam address of the exam.
    *   @param mark accept or reject the mark.
    */
    function insertPassedExam (address teaching, address exam, bool mark) 
    public 
    isOwnerOrFacade()
    {
        if (mark == true) { 
            teachingToExam[teaching] = exam;
            intToTeaching[last] = teaching;
            last += 1;
        }
    }

    /** @dev Get the number of teaching passed.
    *   @return uint number of passed teachings.
    */
    function getNumberOfTeachings() public view returns(uint) {
        return last;
    }

    /** @dev Get a teaching given an index.
    *   @param index uint of the teaching.
    *   @return address teaching.
    */
    function getTeaching(uint index) public view returns(address) {
        require(index < last);
        return intToTeaching[index];
    }

    /** @dev Get the exam for a given teaching.
    *   @param teaching address of the teaching.
    *   @return address exam .
    */
    function getExam(address teaching) public view returns(address) {
        require(teachingToExam[teaching] != 0x0);
        return teachingToExam[teaching];
    }

    /** @dev Check if the student has passed the teaching.
    *   @param teaching address of the teaching.
    *   @return bool true if student has passed the teaching.
    */
    function checkPassedTeaching(address teaching) public view returns(bool) {
        bool result = teachingToExam[teaching] != 0x0;
        return result;
    }

    /** @dev Get student degree course.
    *   @return address degree course address.
    */
    function getDegreeCourse() public view returns(address) {
        return degreeCourse;
    }

    /** @dev Set the student degree course.
    *   @param degreeC address of the degree course.
    */
    function setDegreeCourse(address degreeC) 
    public
    isOwnerOrFacade() 
    {
        degreeCourse = degreeC;
    }
}
