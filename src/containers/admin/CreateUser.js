import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddUser } from '../../reducers';
import CreateUserComponent from '../../components/admin/CreateUserComponent';

const CreateUser = ({ state, actions }) => (
  <CreateUserComponent state={state} actions={actions} />
);

CreateUser.propTypes = {
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
    status: state['add-user'].status,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addUserRequest: (user) => {
      dispatch(AddUser.creators.addUserRequest(user));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
