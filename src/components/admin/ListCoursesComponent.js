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
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium' }}
    >
      <Heading tag="h4" >
      Courses found: {/* size */}
      </Heading>
      <Heading tag="h5" >
        Filter users by serial number :
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
          <th>ID</th>
          <th>Name</th>
          <th>President</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coursesEntries.map((element, index) => (
            <CourseEntry
              index={index}
              {...element}
              address={props.address}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

ListCoursesComponent.propTypes = {
  coursesEntries: PropTypes.arrayOf.isRequired,
  address: PropTypes.string.isRequired,
};

export default ListCoursesComponent;
