import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Heading, Search, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import TeachingEntry from './TeachingEntry';

const ListTeachingsComponent = ({ size, teachingsEntries }) => (
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
        Manage Teachings
      </Label>
      <FormNextLinkIcon />
      <Label>
        List Teachings
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
          List Teachings
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Teachings found: {size}
      </Heading>
      <Heading tag="h5" >
          Filter teachings by serial number :
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="Search: #"
      />
    </Box>

    <Table
      responsive
      selectable
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Teaching</th>
          <th>Course</th>
          <th>Responsible</th>
        </tr>
      </thead>
      <tbody>
        {
          teachingsEntries.map((element, index) => (
            <TeachingEntry
              key={[element.address]}
              index={index}
              {...element}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

ListTeachingsComponent.propTypes = {
  teachingsEntries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

export default ListTeachingsComponent;
