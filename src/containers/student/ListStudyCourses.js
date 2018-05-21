
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListCoursesComponent from '../../components/student/ListStudyCoursesComponent';
import { ListCoursesStudent as ListCourseReducer } from '../../reducers';


class ListStudyCourses extends React.Component {
  componentWillMount() {
    this.props.initialize(2018);
  }

  render() {
    return (
      <ListCoursesComponent
        size={this.props.size}
        coursesEntries={this.props.courses}
        subscribeToCourse={this.props.subscribeToCourse}
        activeCourse={this.props.activeCourse}
      />
    );
  }
}

ListStudyCourses.propTypes = {
  courses: PropTypes.arrayOf().isRequired,
  size: PropTypes.number.isRequired,
  activeCourse: PropTypes.string.isRequired,
  initialize: PropTypes.func.isRequired,
  subscribeToCourse: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  subscribeRequest: (address) => {
    dispatch(ListCourseReducer.creators.subscribeRequest(address));
  },
  initialize: (year) => { dispatch(ListCourseReducer.creators.listCoursesRequest(year)); },
});

const mapStateToProps = state => ({
  courses: state['list-courses-student'].courses,
  size: state['list-courses-student'].size,
  activeCourse: state['list-courses-student'].activeCourseName,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListStudyCourses);

