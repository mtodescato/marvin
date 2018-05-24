import React from 'react';
import PropTypes from 'prop-types';
import TableRow from 'grommet/components/TableRow';

const TeachingEntry = props => (
  <TableRow>
    <td>{props.index + 1}</td>
    <td>{props.name}</td>
    <td>{props.course}</td>
    <td>{props.responsible}</td>
  </TableRow>
);


TeachingEntry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  responsible: PropTypes.string.isRequired,
};

export default TeachingEntry;
