import React from 'react';
import { Button, Section, Image, Box, Animate, Label } from 'grommet';
import Alert from 'grommet/components/icons/base/Alert';
import LoginIcon from 'grommet/components/icons/base/Login';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import marvinlogo from '../images/marvin_logo.png';
import ethMetUnipd from '../images/ethereum_metamask_unipd.png';
import '../css/login.css';


const RedirectComponent = type => (
  <Redirect to={`/${type.type}`} />
);

const LoginComponent = props => (
  <div className="loaded">
    <Section
      pad="medium"
      justify="center"
      align="center"
      colorIndex="light-2"
    >
      <h1 margin="none" >
        Uniweb <span className="small">by</span> <Image src={marvinlogo} alt="logo" size="small" />
      </h1>

      {props.type !== 'undefined' ? <RedirectComponent type={props.type} /> : null }
      <Button
        onClick={() => props.loginRequest()}
        primary
        label="Login"
        icon={<LoginIcon />}
      />

      {props.status === 'ERRORED' ?
        <Animate
          enter={{ animation: 'fade', duration: 1000, delay: 0 }}
          keep
        >
          <Box
            colorIndex="critical"
            direction="row"
            pad={{ vertical: 'none', horizontal: 'small', between: 'none' }}
            margin="small"
          >
            <Box direction="row" pad={{ vertical: 'small', horizontal: 'small' }} margin="none">
              <Alert colorIndex="light-1" />
            </Box>
            <Box flex direction="column" margin={{ top: 'none' }} pad={{ vertical: 'small', horizontal: 'none', between: 'none' }}>
              <Label size="medium" margin="none">
                <font color="white">
                  Oops!
                </font>
              </Label>
              <Label size="small" margin="none">
                <font color="white">
                  Seems like your Metamsk account is not recognised by our system.
                  Try again or check your account.
                </font>
              </Label>
            </Box>
          </Box>
        </Animate>
      : null }

      <Box direction="row" align="center">
        <Image src={ethMetUnipd} alt="logo" size="large" />
      </Box>
    </Section>

  </div>
);

LoginComponent.propTypes = {
  type: PropTypes.string.isRequired,
  // error: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

export default LoginComponent;
