import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CreateTeaching from '../../components/admin/CreateCourseComponent';

const CreateTeachingContainer = ({ state, actions }) => (
  <div>
    <CreateTeaching state={state} actions={actions} />
  </div>
);

CreateTeachingContainer.propTypes = {
  actions: PropTypes.shape({
    addTeachingRequest: PropTypes.func.isRequired,
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
    addCourseRequest: (teaching) => {
      dispatch(actionTypes.addCourseRequest(teaching));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeachingContainer);
*/
export default CreateTeachingContainer;
