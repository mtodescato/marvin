import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddUser } from '../../reducers';
import CreateUser from '../../components/admin/CreateUserComponent';

const CreateUserContainer = ({ state, actions }) => (
  <CreateUser state={state} actions={actions} />
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
    isSuccess: state['add-user'].isSuccess,
    isFailed: state['add-user'].isFailed,
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
