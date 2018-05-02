import React from 'react';
import PropTypes from 'prop-types';
import CourseListComponent from '../../components/student/listCourses';

export const coursesEntry = [{
  name: 'Informatica',
  president: 'Tullio',
  type: 'Triennale',
  year: '2018/19',
},
{
  name: 'Matematica',
  president: 'Montefalcone',
  type: 'Triennale',
  year: '2018/19',
},
{
  name: 'Biologia',
  president: 'Gaggi',
  type: 'Triennale',
  year: '2018/19',
},
];


const CoursesList = () => (
  <div>
    <CourseListComponent coursesEntry={coursesEntry} />
  </div>
);

CourseListComponent.propTypes = {
  courseEntry: PropTypes.arrayOf.isRequired,
};

export default CoursesList;
