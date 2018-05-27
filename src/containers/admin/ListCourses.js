import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListCoursesComponent from '../../components/admin/ListCoursesComponent';
import { ListStudyCourses } from '../../reducers';

class ListCourses extends React.Component {
  componentWillMount() {
    this.props.initialize(2018);
  }

  render() {
    return (
      <ListCoursesComponent
        size={this.props.size}
        coursesEntries={this.props.courses}
        initialize={this.props.initialize}
        statusListCoursesRequest={this.props.statusListCoursesRequest}
      />
    );
  }
}

ListCourses.propTypes = {
  initialize: PropTypes.func.isRequired,
  statusListCoursesRequest: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    president: PropTypes.string.isRequired,
    courseType: PropTypes.string.isRequired,
  })).isRequired,
  size: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  initialize: (year) => { dispatch(ListStudyCourses.creators.listStudyCoursesRequest(year)); },
});

const mapStateToProps = state => ({
  statusListCoursesRequest: state['list-study-courses'].status,
  courses: state['list-study-courses'].courses,
  size: state['list-study-courses'].size,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCourses);
