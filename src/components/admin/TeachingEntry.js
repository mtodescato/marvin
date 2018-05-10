import React from 'react';
import PropTypes from 'prop-types';
import TableRow from 'grommet/components/TableRow';

const TeachingEntry = props => (
  <TableRow>
    <td>{props.index}</td>
    <td>{props.name}</td>
    <td>{props.professor}</td>
    <td>{props.degreeCourse}</td>
  </TableRow>
);


TeachingEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  degreeCourse: PropTypes.string.isRequired,
};

export default TeachingEntry;
