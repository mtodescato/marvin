import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Section } from 'grommet';

const Dashboard = ({ Component }) => (
  <Section>
    <Heading>Student Dashboard</Heading>
    <Component />
  </Section>
);

Dashboard.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default Dashboard;
