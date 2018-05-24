import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Heading, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import PendingResultEntry from './PendingResultEntry';

const ListPendingResultsComponent = ({
  size,
  examsResults,
  accept,
  reject,
}) => (
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
        Exams Results
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
        Exams Results
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Pending results: {size}
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
          <th>Result</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          examsResults.map((element, index) => (
            <PendingResultEntry
              key={[element.address]}
              index={index}
              {...element}
              accept={accept}
              reject={reject}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

ListPendingResultsComponent.propTypes = {
  examsResults: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
};

export default ListPendingResultsComponent;

