import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CreateTeaching from '../../components/admin/CreateTeachingComponent';

const CreateTeachingContainer = ({ state, actions }) => (
  <CreateTeaching state={state} actions={actions} />
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

CreateTeaching.propTypes = {
  actions: PropTypes.shape({
    addTeachingRequest: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isFailed: PropTypes.bool.isRequired,
  }).isRequired,
};
/*
const mapDispatchToProps = dispatch => ({
  actions: {
    addTeachingRequest: (teaching) => {
      dispatch(AddTeaching.creators.addTeachingRequest(teaching));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeaching);

*/

export default CreateTeaching;
