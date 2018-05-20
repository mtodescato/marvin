
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import ListCoursesComponent from '../../components/student/ListStudyCoursesComponent';
// import { ListCourse as ListCourseReducer } from '../../reducers';

export const coursesEntries = [{
  name: 'Informatica',
  president: 'Mario',
  type: 'Triennale',
  address: 'addressaddressaddressaddressaddressaddressaddress',
},
{
  name: 'Matematica',
  president: 'Montefalcone',
  type: 'Triennale',
  address: 'addressaddressaddressaddressaddressaddressaddress',
},
{
  name: 'Biologia',
  president: 'Gaggi',
  type: 'Master',
  address: 'addressaddressaddressaddressaddressaddressaddress',
},
];
/*
class ListStudyCourses extends React.Component {
  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <ListCoursesComponent
        size={this.props.size}
        coursesEntries={this.props.courses}
        subscribeToCourse={this.props.subscribeToCourse}
      />
    );
  }
} */

const ListStudyCourses = () => (
  <ListCoursesComponent
    size={3}
    coursesEntries={coursesEntries}
  />
);

ListStudyCourses.propTypes = { /*
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    president: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  subscribeToCourse: PropTypes.func.isRequired, */
};

const mapDispatchToProps = () => ({
/* const mapDispatchToProps = dispatch => ({
  subscribeToCourse: (address) => {
    dispatch(ListCourseReducer.creators.subscribeRequest(address));
},
  initialize: () => { dispatch(ListCourseReducer.creators.listCoursesRequest()); }, */
});

const mapStateToProps = () => ({
/* const mapStateToProps = state => ({
  courses: state['list-student-courses'].courses,
  size: state['list-student-courses'].size, */
});

export default connect(mapStateToProps, mapDispatchToProps)(ListStudyCourses);

