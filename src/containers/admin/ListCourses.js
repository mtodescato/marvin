import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListCoursesComponent from '../../components/admin/ListCoursesComponent';
// import { ListCourses as ListCoursesReducer } from '../../reducers';

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

class ListCourses extends React.Component {
  /*
  componentWillMount() {
    this.props.initialize();
  } */

  justfortheLint() { // da eliminare
    this.size = 0;
  }

  render() {
    return (
      <ListCoursesComponent
        size={this.props.size}
        coursesEntries={courses}
        // coursesEntries={this.props.courses}
      />
    );
  }
}

ListCourses.propTypes = {
  /* courses: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    president: PropTypes.number.isRequired,
    courseType: PropTypes.string.isRequired,
  })).isRequired,
  */
  size: PropTypes.number.isRequired,
  // initialize: PropTypes.func.isRequired,
};
/*
const mapDispatchToProps = dispatch => ({
  initialize: () => { dispatch(ListCoursesReducer.creators.listCoursesRequest()); },
});

const mapStateToProps = state => ({
  courses: state['list-courses'].courses,
  size: state['list-courses'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCourses);
*/

export default ListCourses;
