import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableHeader, Heading, Label } from 'grommet';
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
      <TableHeader labels={['#', 'Name', 'Date', 'Result', 'Action']} />
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
  examsResults: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    examAddress: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
};

export default ListPendingResultsComponent;

