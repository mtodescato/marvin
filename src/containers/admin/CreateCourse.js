import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddCourse } from '../../reducers';
import CreateCourse from '../../components/admin/CreateCourseComponent';

const CreateCourseContainer = ({ state, actions }) => (
  <CreateCourse state={state} actions={actions} />
);

CreateCourseContainer.propTypes = {
  actions: PropTypes.shape({
    addCourseRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  state: {
    status: state['add-user'].status,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addCourseRequest: (course) => {
      dispatch(AddCourse.creators.addCourseRequest(course));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseContainer);
