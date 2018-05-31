import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddCourse } from '../../reducers';
import CreateCourseComponent from '../../components/admin/CreateCourseComponent';

const CreateCourse = ({ statusAddCourseRequest, actions }) => (
  <CreateCourseComponent statusAddCourseRequest={statusAddCourseRequest} actions={actions} />
);

CreateCourse.propTypes = {
  actions: PropTypes.shape({
    addCourseRequest: PropTypes.func.isRequired,
  }).isRequired,
  statusAddCourseRequest: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  statusAddCourseRequest: state['add-course'].status,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addCourseRequest: (course) => {
      dispatch(AddCourse.creators.addCourseRequest(course));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourse);
