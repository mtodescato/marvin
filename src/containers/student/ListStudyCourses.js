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
        subscribeToCourse={this.props.subscribeRequest}
        activeCourseName={this.props.activeCourseName}
        initialize={this.props.initialize}
        status={this.props.status}
      />
    );
  }
}

ListStudyCourses.propTypes = {
  status: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    president: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    ID: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
  activeCourseName: PropTypes.string.isRequired,
  initialize: PropTypes.func.isRequired,
  subscribeRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  subscribeRequest: (address) => {
    dispatch(ListCourseReducer.creators.subscribeRequest(address));
  },

  initialize: (year) => { dispatch(ListCourseReducer.creators.listCoursesRequest(year)); },
});

const mapStateToProps = state => ({
  status: state['list-courses-student'].status,
  courses: state['list-courses-student'].courses,
  size: state['list-courses-student'].size,
  activeCourseName: state['list-courses-student'].activeCourseName,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListStudyCourses);

