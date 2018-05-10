import React from 'react';
import ListCoursesComponent from '../../components/admin/ListCoursesComponent';

export const courses = [{
  ID: '43553',
  name: 'Analisi',
  president: 'Francescopaolo Montefalcone',
  courseType: 'Three-year',
},
{
  ID: '43553',
  name: 'Analisi',
  president: 'Francescopaolo Montefalcone',
  courseType: 'Master',
},
{
  ID: '43553',
  name: 'Analisi',
  president: 'Francescopaolo Montefalcone',
  courseType: 'Three-year',
},
];

const address = {};

const ListCourses = () => (
  <ListCoursesComponent
    courses={courses}
    address={address}
  />
);

export default ListCourses;
