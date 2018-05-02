import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/admin/createUserActions';
import CreateCourse from '../../components/admin/dashboard/createCourse';

const CreateCourseContainer = ({ state, actions }) => (
  <div>
    <CreateCourse state={state} actions={actions} />
  </div>
);

CreateCourseContainer.propTypes = {
  actions: PropTypes.shape({
    addUserRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  state: {
    isSuccess: state.addUserReducer.isSuccess,
    isFailed: state.addUserReducer.isFailed,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addUserRequest: (user) => {
      dispatch(actionTypes.addUserRequest(user));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseContainer);
