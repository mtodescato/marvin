import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'grommet';

const DashboardAdmin = ({ Component }) => (
  <Section>
    <Component />
  </Section>
);

DashboardAdmin.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default DashboardAdmin;
