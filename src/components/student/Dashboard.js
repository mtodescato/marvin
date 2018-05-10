import React from 'react';
import PropTypes from 'prop-types';
import { Section } from 'grommet';

const Dashboard = ({ Component }) => (
  <Section pad="medium">
    <Component />
  </Section>
);

Dashboard.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default Dashboard;
