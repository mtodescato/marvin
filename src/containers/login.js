import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginComponent from '../components/login';
import { Web3 } from './../reducers';

const Login = props => (
  <div>
    <LoginComponent
      onLoginUserClick={props.onLoginUserClick}
      type={props.type}
      address={props.address}
    />
  </div>
);

Login.propTypes = {
  onLoginUserClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onLoginUserClick: () => dispatch(Web3.creators.web3AddressRequest()),
});

const mapStateToProps = state => ({
  type: 'undefined',
  address: state['web-3'].address,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
