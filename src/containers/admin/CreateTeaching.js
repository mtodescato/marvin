import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateTeaching from '../../components/admin/CreateTeachingComponent';
import { ListProfessors, ListStudyCourses, AddTeaching } from '../../reducers';

class CreateTeachingContainer extends React.Component {
  componentWillMount() {
    this.props.actions.initialize(2018);
  }
  render() {
    return (
      <CreateTeaching
        professors={this.props.professors}
        courses={this.props.courses}
        actions={this.props.actions}
      />
    );
  }
}

CreateTeachingContainer.propTypes = {
  actions: PropTypes.shape({
    addTeachingRequest: PropTypes.func.isRequired,
  }).isRequired,
  professors: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  professors: state['list-professors'].professors.map(professor => ({
    value: professor.address,
    label: `${professor.name} ${professor.surname}`,
  })),
  courses: state['list-study-courses'].courses.map(course => ({
    value: course.ID,
    label: `${course.name} - ${course.president}`,
  })),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    initialize: (year) => {
      dispatch(ListProfessors.creators.listProfessorsRequest());
      dispatch(ListStudyCourses.creators.listStudyCoursesRequest(year));
    },
    addTeachingRequest: (teaching) => {
      dispatch(AddTeaching.creators.addTeachingRequest(teaching));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeachingContainer);
