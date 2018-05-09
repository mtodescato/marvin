import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginComponent from '../components/LoginComponent';
import { UserReducer } from './../reducers';

const Login = props => (
  <div>
    <LoginComponent
      onLoginUserClick={props.onLoginUserClick}
      type={props.type}
    />
  </div>
);

Login.propTypes = {
  onLoginUserClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLoginUserClick: () => dispatch(UserReducer.creators.loginUser()),
});

const mapStateToProps = state => ({
  type: state['user-reducer'].type,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
