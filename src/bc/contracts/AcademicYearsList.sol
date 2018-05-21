pragma solidity 0.4.23;
import "./AcademicYear.sol";
import "./Ownable.sol";


/** @title AcademicYearsList*/
contract  AcademicYearsList is Ownable {

    mapping ( uint => address ) private yearToAcademicYear;

    /** @dev Check if the year is not in the accademic years mapping.
    *   @param year uint of the year number.
    */
    modifier onlyNewYear (uint year) {
        require(yearToAcademicYear[year] == 0x0);
        _;
    }

    /** @dev Check if the academic year is in the system.
    *   @param year uint of the year number. 
    */
    modifier onlyExistingYear (uint year) {
        require(yearToAcademicYear[year] != 0x0);
        _;
    }

    /** @dev Insert a new academic year in the mapping.
    *   @param year number of the academic year.
    *   @param academicYear address of the academicYear.
    */
    function insertNewAcademicYears( uint year, address academicYear) 
    public 
    onlyOwner()
    onlyNewYear(year) {
        yearToAcademicYear[year] = academicYear;
    }

    /** @dev Get the address of an AcademicYear given an index.
    *   @param year index of the academicYear.
    *   @return address AcademicYear contract address.
    */
    function getAcademicYear ( uint year ) public view onlyExistingYear(year) returns(address) {
        return yearToAcademicYear[year];
    }
}
