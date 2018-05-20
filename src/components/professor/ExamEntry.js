import React from 'react';
import PropTypes from 'prop-types';
import TableRow from 'grommet/components/TableRow';

const ExamEntry = props => (
  <TableRow>
    <td>{props.index}</td>
    <td>{props.serialNumber}</td>
    <td>{props.date}</td>
  </TableRow>
);


ExamEntry.propTypes = {
  index: PropTypes.number.isRequired,
  serialNumber: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ExamEntry;
