import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../../components/admin/DashboardAdmin';
import Home from '../../components/admin/HomeComponent';
import ListUsers from './ListUsers';
import CreateUser from './CreateUser';
// import ListCourses from './ListCoursesContainer';
import CreateCourse from './CreateCourse';
import CreateTeaching from '../../components/admin/CreateTeachingComponent';

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
    /* case 3:
      return { DashboardComponent: ListCourses }; */
    case 4:
      return { DashboardComponent: CreateCourse };
    case 6:
      return { DashboardComponent: CreateTeaching };
    default:
      return { DashboardComponent: Home };
  }
};

export default connect(mapStateToProps)(MainPanelAdmin);
