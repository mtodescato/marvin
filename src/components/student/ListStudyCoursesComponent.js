import React from 'react';
import PropTypes from 'prop-types';
import { Box, Table, Heading, Search, Label } from 'grommet';
import FormNextLinkIcon from 'grommet/components/icons/base/FormNextLink';
import CourseEntry from './CourseEntry';

const ListStudyCoursesComponent = ({
  activeCourseName,
  size,
  coursesEntries,
  subscribeToCourse,
  initialize,
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
        Course application
      </Label>
    </Box>

    <Box className="titleBox" alignSelf="center" >
      <Heading tag="h2" strong>
        Course application
      </Heading>
    </Box>

    <Box
      className="searchBox"
      size="medium"
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Heading tag="h4" >
        Courses found: {size}
      </Heading>
      <Heading tag="h5" >
          Filter courses by Academic Year :
      </Heading>
      <Search
        inline
        full="false"
        size="small"
        placeHolder="2018"
        onDOMChange={e => initialize(e.target.value)}
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
          <th>Subscribe</th>
        </tr>
      </thead>
      <tbody>
        {
          coursesEntries.map((element, index) => (
            <CourseEntry
              key={[element.address]}
              index={index}
              {...element}
              activeCourseName={activeCourseName}
              subscribeToCourse={subscribeToCourse}
            />
          ))
        }
      </tbody>
    </Table>
  </Box>
);

ListStudyCoursesComponent.propTypes = {
  coursesEntries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    role: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  subscribeToCourse: PropTypes.func.isRequired,
  activeCourseName: PropTypes.string.isRequired,
  initialize: PropTypes.func.isRequired,
};

export default ListStudyCoursesComponent;

