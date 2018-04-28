import React from 'react';
import { Button } from 'grommet';
import LoginIcon from 'grommet/components/icons/base/Login';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RedirectComponent = type => (
  <Redirect to={`/${type.type}`} />
);

const LoginButton = props => (
  <div className="Login">
    {props.type !== 'undefined' ? <RedirectComponent type={props.type} /> : null }
    <Button
      onClick={() => props.onLoginUserClick()}
      primary
      label="Login"
      icon={<LoginIcon />}
    />
  </div>
);

LoginButton.propTypes = {
  type: PropTypes.string.isRequired,
  onLoginUserClick: PropTypes.func.isRequired,
};

export default LoginButton;
