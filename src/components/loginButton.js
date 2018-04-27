import React from 'react';
import { Button } from 'grommet';
import LoginIcon from 'grommet/components/icons/base/Login';

const LoginButton = () => (
  <div className="Login">
    <Button
      primary
      label="Login"
      icon={<LoginIcon />}
    />
  </div>
);

export default LoginButton;
