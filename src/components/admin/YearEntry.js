import React from 'react';
import PropTypes from 'prop-types';
import TableRow from 'grommet/components/TableRow';

const YearEntry = props => (
  <TableRow>
    <td>{props.index + 1}</td>
    <td>Academic Year {props.year}/{props.year + 1}</td>
    <td>{props.address}</td>
  </TableRow>
);


YearEntry.propTypes = {
  index: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};

export default YearEntry;
