import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../../components/shared/Dashboard';
import Home from './Home';
import ListUsers from './ListUsers';
import CreateUser from './CreateUser';
import ListCourses from './ListCourses';
import CreateCourse from './CreateCourse';
import ListTeachings from './ListTeachings';
import CreateYear from './CreateYear';
import CreateTeaching from './CreateTeaching';
import ShowMeTheCost from '../../components/shared/ShowMeTheCost';

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
    case 7:
      return { DashboardComponent: CreateYear };
    case 9:
      return { DashboardComponent: ShowMeTheCost };
    default:
      return { DashboardComponent: Home };
  }
};

export default connect(mapStateToProps)(MainPanelAdmin);
