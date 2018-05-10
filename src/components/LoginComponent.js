import React from 'react';
import { Button, Section, Image, Box } from 'grommet';
import LoginIcon from 'grommet/components/icons/base/Login';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../images/unipd.png';
import ethereum from '../images/ethereum.png';
import marvinlogo from '../images/marvin_logo.png';
import '../css/login.css';


const RedirectComponent = type => (
  <Redirect to={`/${type.type}`} />
);

const LoginComponent = props => (
  <div className="loaded">
    <Section
      pad="large"
      justify="center"
      align="center"
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
      <p>{props.address}</p>
    </Section>
    <Section
      pad="large"
      justify="center"
      align="center"
      colorIndex="light-2"
    >
      <Box direction="row" align="center">
        <Image src={logo} alt="logo" />
        <Image src={ethereum} alt="logo" />
      </Box>
    </Section>

  </div>
);

LoginComponent.propTypes = {
  type: PropTypes.string.isRequired,
  loginRequest: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default LoginComponent;
