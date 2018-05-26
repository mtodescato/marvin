import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Search, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import DegreeProcedureEntry from './DegreeProcedureEntry';

// const DegreeProceduresComponent = ({ size, degreeProcedureEntries, manageDPRequest }) => (
const DegreeProceduresComponent = ({ size, degreeProcedureEntries }) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >
    <Box
      className="PanelHeader"
      direction="row"
      justify="start"
      align="center"
      separator="bottom"
    >
      <FormNextLinkIcon />
      <Label>
        Manage Degree Procedures
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
          Degree Procedures Request
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Requests found: {size}
      </Heading>
      <Heading tag="h5" >
          Filter students by serial number :
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="Search: #"
      />
    </Box>

    <Table
      responsive
      selectable
    >
      <TableHeader labels={['#', 'Date', 'Student', 'Student #', 'Thesis title', 'Supervisor', 'State', 'Manage']} />
      <tbody>
        {
          degreeProcedureEntries.map((element, index) => (
            <DegreeProcedureEntry
              key={[element.address]}
              index={index}
              {...element}
              // manageDPRequest={manageDPRequest}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

DegreeProceduresComponent.propTypes = {
  degreeProcedureEntries: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    studentName: PropTypes.string.isRequired,
    studentSurname: PropTypes.string.isRequired,
    studentSerialNumber: PropTypes.string.isRequired,
    thesisTitle: PropTypes.string.isRequired,
    requestState: PropTypes.string.isRequired,
    relatorName: PropTypes.string.isRequired,
    relatorSurname: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  // manageDPRequest: PropTypes.func.isRequired,
};

export default DegreeProceduresComponent;
