import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, Paragraph } from 'grommet';

const CourseEntry = props => (
  <TableRow>
    <td>{props.index + 1}</td>
    <td>{props.name}</td>
    <td>{props.president}</td>
    <td>{props.courseType}</td>
    <td>
      <Paragraph size="medium" margin="none">
        {props.ID}
      </Paragraph>
    </td>
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
