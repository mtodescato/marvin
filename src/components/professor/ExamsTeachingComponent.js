import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading } from 'grommet';
import ExamEntry from './ExamEntry';

const ExamsTeachingComponent = ({ size, exams }) => (
  <Box
    className="PanelBox"
    direction="column"
    margin={{ vertical: 'none', horizontal: 'large' }}
    separator="bottom"
  >
    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Exams found: {size}
      </Heading>
    </Box>
    <Box
      className="tableBox"
      size="large"
    >
      <Table
        responsive
        selectable
      >
        <TableHeader labels={['#', 'Address', 'Date']} />
        <tbody>
          {
            exams.map((element, index) => (
              <ExamEntry
                key={[element.address]}
                index={index}
                {...element}
              />
            ))
          }
        </tbody>
      </Table>
    </Box>
  </Box>
);

ExamsTeachingComponent.propTypes = {
  exams: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ExamsTeachingComponent;
