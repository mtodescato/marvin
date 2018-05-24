import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Heading, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import ExamApplicationEntry from './ExamApplicationEntry';

const ListAvaiableExamsComponent = ({ size, examsEntries, subscribeToExam }) => (
  <Box
    className="PanelBox"
    direction="column"
    margin="small"
    separator="bottom"
  >
    <Box
      className="PanelHeader"
      direction="row"
      justify="start"
      align="center"
      separator="bottom"
    >
      <FormNextLinkIcon />
      <Label>
        Booking Exams
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
        Booking Exams
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Exams avaiable: {size}
      </Heading>
    </Box>

    <Table
      responsive
      selectable
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date</th>
          <th>Subscribe</th>
        </tr>
      </thead>
      <tbody>
        {
          examsEntries.map((element, index) => (
            <ExamApplicationEntry
              key={[element.address]}
              index={index}
              {...element}
              subscribeToExam={subscribeToExam}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

ListAvaiableExamsComponent.propTypes = {
  examsEntries: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  subscribeToExam: PropTypes.func.isRequired,
};

export default ListAvaiableExamsComponent;

