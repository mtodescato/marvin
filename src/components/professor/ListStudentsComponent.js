import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading } from 'grommet';
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
    >
      <TableHeader labels={['#', 'Social Number', 'Name', 'Surname', 'Publish mark']} />
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

