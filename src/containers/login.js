import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginButton from '../components/loginButton';
import { loginUser } from '../actions/loginActions';

const Login = props => (
  <LoginButton
    onLoginUserClick={props.onLoginUserClick}
    type={props.type}
  />
);

Login.propTypes = {
  onLoginUserClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLoginUserClick: () => dispatch(loginUser()),
});

const mapStateToProps = state => ({
  type: state.userReducer.type,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
