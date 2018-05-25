import React from 'react';
import { Button, Section, Image, Box } from 'grommet';
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
      <p>
        {// props.address
        }
      </p>
      <Box direction="row" align="center">
        <Image src={ethMetUnipd} alt="logo" size="large" />
      </Box>
    </Section>

  </div>
);

LoginComponent.propTypes = {
  type: PropTypes.string.isRequired,
  loginRequest: PropTypes.func.isRequired,
  // address: PropTypes.string.isRequired,
};

export default LoginComponent;
