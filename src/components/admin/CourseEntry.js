import React from 'react';
import PropTypes from 'prop-types';
import TableRow from 'grommet/components/TableRow';

const CourseEntry = props => (
  <TableRow>
    <td>{props.index}</td>
    <td>{props.ID}</td>
    <td>{props.name}</td>
    <td>{props.president}</td>
    <td>{props.courseType}</td>
  </TableRow>
);


CourseEntry.propTypes = {
  index: PropTypes.number.isRequired,
  ID: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  president: PropTypes.string.isRequired,
  courseType: PropTypes.string.isRequired,
};

export default CourseEntry;
