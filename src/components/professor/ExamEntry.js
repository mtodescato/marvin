import React from 'react';
import PropTypes from 'prop-types';
import TableRow from 'grommet/components/TableRow';

const ExamEntry = props => (
  <TableRow>
    <td>{props.index + 1}</td>
    <td>{props.address}</td>
    <td>{props.date}</td>
  </TableRow>
);


ExamEntry.propTypes = {
  index: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ExamEntry;
