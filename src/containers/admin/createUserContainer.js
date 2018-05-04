import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddUser } from '../../reducers';
import CreateUser from '../../components/admin/dashboard/createUser';

const CreateUserContainer = ({ state, actions }) => (
  <div>
    <CreateUser state={state} actions={actions} />
  </div>
);

CreateUserContainer.propTypes = {
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
      dispatch(AddUser.creators.addUserRequest(user));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer);
