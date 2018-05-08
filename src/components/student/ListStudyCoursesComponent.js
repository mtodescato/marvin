import React from 'react';
import Table from 'grommet/components/Table';
import PropTypes from 'prop-types';
import CourseEntry from './CourseEntry';

const CoursesListComponent = props => (
  <div>
    <h4> Courses avaiable</h4>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>President</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coursesEntry.map((element, index) => (
            <CourseEntry
              index={index}
              {...element}
              subscribeToCourse={props.subscribeToCourse}
              address={props.address}
            />
          ))
        }
      </tbody>
    </Table>
  </div>
);

CoursesListComponent.propTypes = {
  coursesEntry: PropTypes.arrayOf.isRequired,
  subscribeToCourse: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default CoursesListComponent;
