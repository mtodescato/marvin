import React from 'react';
import Table from 'grommet/components/Table';
import PropTypes from 'prop-types';
import CourseEntry from './CourseEntry';

const ListCoursesComponent = props => (
  <div>
    <h4> Courses List</h4>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>President</th>
          <th>Course Type</th>
        </tr>
      </thead>
      <tbody>
        {
          props.courses.map((element, index) => (
            <CourseEntry
              index={index}
              {...element}
              address={props.address}
            />
          ))
        }
      </tbody>
    </Table>
  </div>
);

ListCoursesComponent.propTypes = {
  courses: PropTypes.arrayOf.isRequired,
  address: PropTypes.string.isRequired,
};

export default ListCoursesComponent;
