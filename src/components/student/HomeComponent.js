import React from 'react';
import PropTypes from 'prop-types';
import { Section, Heading } from 'grommet';

const HomeComponent = props => (
  <Section>
    <Heading>
      Dashboard Home
      <br />
      <small>
        Student Zone
      </small>
    </Heading>
    <p>
      Welcome Student {props.user.name}
    </p>
    <p>
    N. {props.user.matricola}
    </p>
    <p>
      Address: {props.user.address}
    </p>
  </Section>
);

HomeComponent.propTypes = {
  user: PropTypes.arrayOf.isRequired,
};

export default HomeComponent;
