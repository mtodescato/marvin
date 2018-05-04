import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CreateCourse from '../../components/admin/dashboard/createCourse';

const CreateCourseContainer = ({ state, actions }) => (
  <div>
    <CreateCourse state={state} actions={actions} />
  </div>
);

CreateCourseContainer.propTypes = {
  actions: PropTypes.shape({
    addCourseRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
  }).isRequired,
};

/* const mapStateToProps = state => ({
  state: {
    isSuccess: state.addUserReducer.isSuccess,
    isFailed: state.addUserReducer.isFailed,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addCourseRequest: (course) => {
      dispatch(actionTypes.addCourseRequest(course));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseContainer);
*/
export default CreateCourseContainer;