import React from 'react';
import { Box, Table, Heading, Search, Label } from 'grommet';
import PropTypes from 'prop-types';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import CourseEntry from './CourseEntry';

const ListCoursesComponent = props => (
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
        Manage Courses
      </Label>
      <FormNextLinkIcon />
      <Label>
        List Courses
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
        List Study Courses
      </Heading>
    </Box>

    <Box
      className="infoBox"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h5" >
        This page displays the list of the courses in the system.
        In order to see specific course details you can filter them by academic year.
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Courses found: {/* size */}
      </Heading>
      <Heading tag="h5" >
        Filter courses by Academic Year:
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="2018"
        onDOMChange={(e) => {
          e.preventDefault();
          props.initialize(e.target.value);
        }}
      />
    </Box>

    <Table
      responsive
      selectable
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>President</th>
          <th>Type</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coursesEntries.map((element, index) => (
            <CourseEntry
              key={[element.ID]}
              index={index}
              {...element}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

ListCoursesComponent.propTypes = {
  coursesEntries: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    president: PropTypes.string.isRequired,
    courseType: PropTypes.string.isRequired,
  })).isRequired,
  initialize: PropTypes.func.isRequired,
};

export default ListCoursesComponent;
