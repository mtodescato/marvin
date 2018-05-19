pragma solidity 0.4.23;
import "./AcademicYear.sol";
import "./Ownable.sol";


contract  AcademicYearsList is Ownable {

    mapping ( uint => address ) private yearToAcademicYear;

    modifier onlyNewYear (uint year) {
        require(yearToAcademicYear[year] == 0x0);
        _;
    }

    modifier onlyExistingYear (uint year) {
        require(yearToAcademicYear[year] != 0x0);
        _;
    }

    function insertNewAcademicYears( uint year, address academicYear) 
    public 
    onlyNewYear(year) 
    onlyOwner() {
        yearToAcademicYear[year] = academicYear;
    }

    function getAcademicYear ( uint year ) public view onlyExistingYear(year) returns(address) {
        return yearToAcademicYear[year];
    }

}
