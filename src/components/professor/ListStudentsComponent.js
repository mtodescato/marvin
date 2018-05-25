import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Heading } from 'grommet';
import StudentEntry from './StudentEntry';

const ListStudentsComponent = ({
  size,
  examsResults,
  examAddress,
  publishMark,
}) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Enrolled students: {size}
      </Heading>
    </Box>

    <Table
      responsive
      selectable
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Social Number</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Mark</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          examsResults.map((element, index) => (
            <StudentEntry
              key={[element.address]}
              index={index}
              {...element}
              examAddress={examAddress}
              publishMark={publishMark}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

ListStudentsComponent.propTypes = {
  examAddress: PropTypes.string.isRequired,
  examsResults: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    socialNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  publishMark: PropTypes.func.isRequired,
};

export default ListStudentsComponent;

