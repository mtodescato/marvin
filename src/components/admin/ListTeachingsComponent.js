import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Heading, Search, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import TeachingEntry from './TeachingEntry';

const ListTeachingsComponent = ({ size, teachings, initialize }) => (
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
      className="infoBox"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h5" >
        This page displays the list of the teachings in the system.
        In order to see a specific teaching details you can filter them by academic year.
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
        Filter teachings by year:
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="2018"
        onDOMChange={(e) => { initialize(e.target.value); }}
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
          teachings.map((element, index) => (
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
  teachings: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
};

export default ListTeachingsComponent;
