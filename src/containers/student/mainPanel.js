import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../../components/student/dashboard';
import Home from '../../containers/student/home';
import ListStudyCourses from '../../containers/student/courses';

const MainPanel = ({ DashboardComponent }) => (
  <div>
    <Dashboard Component={DashboardComponent} />
  </div>
);

MainPanel.propTypes = {
  DashboardComponent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  switch (state.menuEntriesReducer) {
    case 0:
      return { DashboardComponent: Home };
    case 1:
      return { DashboardComponent: ListStudyCourses };
    default:
      return { DashboardComponent: Home };
  }
};

export default connect(mapStateToProps)(MainPanel);
