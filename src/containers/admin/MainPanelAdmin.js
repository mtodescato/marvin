import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../../components/admin/DashboardAdmin';
import Home from './Home';
import ListUsers from './ListUsers';
import CreateUser from './CreateUser';
import ListCourses from './ListCourses';
import CreateCourse from './CreateCourse';
import ListTeachings from './ListTeachings';
import CreateYear from './CreateYear';
import CreateTeaching from './CreateTeaching';

const MainPanelAdmin = ({ DashboardComponent }) => (
  <div>
    <Dashboard Component={DashboardComponent} />
  </div>
);

MainPanelAdmin.propTypes = {
  DashboardComponent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  switch (state['menu-entries'].id) {
    case 0:
      return { DashboardComponent: Home };
    case 1:
      return { DashboardComponent: ListUsers };
    case 2:
      return { DashboardComponent: CreateUser };
    case 3:
      return { DashboardComponent: ListCourses };
    case 4:
      return { DashboardComponent: CreateCourse };
    case 5:
      return { DashboardComponent: ListTeachings };
    case 6:
      return { DashboardComponent: CreateTeaching };
    case 8:
      return { DashboardComponent: CreateYear };
    default:
      return { DashboardComponent: Home };
  }
};

export default connect(mapStateToProps)(MainPanelAdmin);
