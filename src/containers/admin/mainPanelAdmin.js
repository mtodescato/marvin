import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../../components/admin/dashboard';
import Home from '../../components/admin/dashboard/home';
import ListUsers from './listUsersContainer';
import CreateUser from './createUserContainer';
import CreateCourse from './createCourseContainer';

const MainPanelAdmin = ({ DashboardComponent }) => (
  <div>
    <Dashboard Component={DashboardComponent} />
  </div>
);

MainPanelAdmin.propTypes = {
  DashboardComponent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  switch (state.menuEntriesReducer) {
    case 0:
      return { DashboardComponent: Home };
    case 1:
      return { DashboardComponent: CreateUser };
    case 2:
      return { DashboardComponent: ListUsers };
    case 3:
      return { DashboardComponent: CreateCourse };
    default:
      return { DashboardComponent: Home };
  }
};

export default connect(mapStateToProps)(MainPanelAdmin);
