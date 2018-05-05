import React from 'react';
import PropTypes from 'prop-types';
import CourseListComponent from '../../components/student/listCourses';

export const coursesEntries = [{
  name: 'Informatica',
  president: 'Tullio',
  type: 'Triennale',
},
{
  name: 'Matematica',
  president: 'Montefalcone',
  type: 'Triennale',
},
{
  name: 'Biologia',
  president: 'Gaggi',
  type: 'Triennale',
},
];

const subscribeToCourse = {};

const address = {};

const CoursesList = () => (
  <div>
    <CourseListComponent
      coursesEntry={coursesEntries}
      subscribeToCourse={subscribeToCourse}
      address={address}
    />
  </div>
);

CourseListComponent.propTypes = {
  courseEntry: PropTypes.arrayOf.isRequired,
  subscribeToCourse: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default CoursesList;
