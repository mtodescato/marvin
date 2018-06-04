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
        statusAddTeachingRequest={this.props.statusAddTeachingRequest}
      />
    );
  }
}

CreateTeachingContainer.propTypes = {
  statusAddTeachingRequest: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    addTeachingRequest: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
  }).isRequired,
  professors: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  courses: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  statusAddTeachingRequest: state['add-teaching'].status,
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
