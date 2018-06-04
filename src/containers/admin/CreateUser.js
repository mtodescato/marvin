import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AddUser } from '../../reducers';
import CreateUserComponent from '../../components/admin/CreateUserComponent';

const CreateUser = ({ statusAddUserRequest, actions }) => (
  <CreateUserComponent statusAddUserRequest={statusAddUserRequest} actions={actions} />
);

CreateUser.propTypes = {
  actions: PropTypes.shape({
    addUserRequest: PropTypes.func.isRequired,
  }).isRequired,
  statusAddUserRequest: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  statusAddUserRequest: state['add-user'].status,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addUserRequest: (user) => {
      dispatch(AddUser.creators.addUserRequest(user));
    },
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
