import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginComponent from '../components/LoginComponent';
import { Web3 } from './../reducers';

const Login = props => (
  <div>
    <LoginComponent
      loginRequest={props.onLoginUserClick}
      type={props.type}
      error={props.error}
      status={props.status}
    />
  </div>
);

Login.defaultProps = {
  error: '',
};

Login.propTypes = {
  onLoginUserClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  status: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLoginUserClick: () => dispatch(Web3.creators.web3AddressRequest()),
});

const mapStateToProps = state => ({
  type: state['web-3-user-info'].type,
  status: state['web-3-user-info'].status,
  error: state['web-3-user-info'].error,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
