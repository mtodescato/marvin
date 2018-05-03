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


const CoursesList = () => (
  <div>
    <CourseListComponent coursesEntry={coursesEntries} />
  </div>
);

CourseListComponent.propTypes = {
  courseEntry: PropTypes.arrayOf.isRequired,
};

export default CoursesList;
