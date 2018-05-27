import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddCourse } from '../../reducers';
import CreateCourse from '../../components/admin/CreateCourseComponent';

const CreateCourseContainer = ({ status, actions }) => (
  <CreateCourse status={status} actions={actions} />
);

CreateCourseContainer.propTypes = {
  actions: PropTypes.shape({
    addCourseRequest: PropTypes.func.isRequired,
  }).isRequired,
  status: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  status: state['add-user'].status,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addCourseRequest: (course) => {
      dispatch(AddCourse.creators.addCourseRequest(course));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseContainer);
